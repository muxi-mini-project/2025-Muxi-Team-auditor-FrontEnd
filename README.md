# 木犀审核前端仓库

为木犀产品提供审核后台服务接入

## 项目架构

| 工具              | 用途                   |
| ----------------- | ---------------------- |
| Vite              | 构建项目               |
| vite-plugin-pages | 提供页面路由           |
| Tailwind CSS      | 编写样式               |
| Radix UI          | 提供无头组件用于自定义 |
| Pont              | 接入后端接口           |
| Zustand           | 提供状态管理           |

## 开发

```
  "scripts": {
    "dev": "vite", // 启动开发服务器
    "build": "tsc -b && vite build", // 打包项目
    "lint": "eslint .", // 检查语法错误与代码风格
    "preview": "vite preview" // 启动预览生产服务
  },
```

