import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('登录数据:', formData);
    // TODO: 实现登录逻辑
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            登录账号
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            欢迎回来，请登录您的账号
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* 用户名输入框 */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                用户名
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:z-10 sm:text-sm"
                placeholder="请输入用户名"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            {/* 密码输入框 */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                密码
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:z-10 sm:text-sm"
                placeholder="请输入密码"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* 记住我和忘记密码 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-900"
              >
                记住我
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                onClick={e => {
                  e.preventDefault();
                  console.log('跳转到忘记密码页面');
                  // TODO: 实现忘记密码跳转
                }}
              >
                忘记密码？
              </a>
            </div>
          </div>

          {/* 登录按钮 */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              登录
            </button>
          </div>

          {/* 注册账号 */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              还没有账号？{' '}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
                onClick={e => {
                  e.preventDefault();
                  navigate('/register');
                }}
              >
                注册账号
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
