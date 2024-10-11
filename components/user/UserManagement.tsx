"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Input, Button, Modal, Form, Pagination, Select } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Define the User type
interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  gender: string;
  birthDate: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [form] = Form.useForm();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page = 1) => {
    try {
      const limit = 5;
      const response = await axios.get(
        `https://dummyjson.com/users?limit=${limit}&skip=${(page - 1) * limit}`
      );
      setUsers(response.data.users);
      setTotalUsers(response.data.total);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`https://dummyjson.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    form.setFieldsValue(user);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingUser(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleFinish = async (values: any) => {
    if (editingUser) {
      try {
        const response = await axios.put(
          `https://dummyjson.com/users/${editingUser.id}`,
          values
        );
        setUsers(
          users.map((user) =>
            user.id === editingUser.id ? response.data : user
          )
        );
        console.log("User updated successfully.");
      } catch (error) {
        console.error("Error updating user:", error);
      }
    } else {
      try {
        const response = await axios.post(
          `https://dummyjson.com/users/add`,
          values
        );
        setUsers([...users, response.data]);
        console.log("User added successfully.");
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }

    setIsModalOpen(false);
    form.resetFields();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl md:text-3xl font-bold">User Management</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex justify-center md:justify-center">
          <form className="max-w-md w-full">
            <div className="relative">
              <svg
                className="absolute w-4 h-4 text-gray-500 dark:text-gray-400 top-1/2 left-3 transform -translate-y-1/2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search user management"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-end items-center">
          <Button
            type="primary"
            onClick={handleAddNew}
            className="bg-blue-500 text-white px-4 py-4"
          >
            Add User
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-4xl w-full bg-white">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-white shadow-sm dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Update
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-400"
                  >
                    {user.firstName} {user.lastName}
                  </th>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.gender}</td>
                  <td className="px-6 py-4">
                    {new Date(user.birthDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      onClick={() => handleEdit(user)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer mr-2"
                    >
                      <EditOutlined style={{ marginRight: 5 }} />
                    </a>
                    <a
                      onClick={() => handleDelete(user.id)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                    >
                      <DeleteOutlined style={{ marginRight: 5 }} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        current={currentPage}
        pageSize={5}
        total={totalUsers}
        onChange={(page) => setCurrentPage(page)}
        className="mt-4 flex justify-center"
      />

      <Modal
        title={editingUser ? "Edit User" : "User Management"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
        }}
        footer={null}
      >
        <p>If you need more info, please check Project Guidelines.</p>
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ required: true, message: "Please enter the first name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ required: true, message: "Please enter the last name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please enter the username" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter the email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender" }]}
          >
            <Select>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500 text-white w-full"
          >
            {editingUser ? "Update User" : "Add User"}
          </Button>
        </Form>
      </Modal>
    </section>
  );
}
