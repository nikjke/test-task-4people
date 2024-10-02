const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", // Основной JavaScript-файл, откуда начинается сборка
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js", // Имя выходного JavaScript-файла
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Для всех файлов SCSS
        use: [
          "style-loader", // Внедряет стили в DOM в виде <style> тега
          "css-loader", // Преобразует CSS в CommonJS
          "sass-loader", // Компилирует SCSS в CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Для изображений
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]", // Копируем изображения в папку images
        },
      },
      {
        test: /\.html$/, // Для обработки HTML-файлов
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Основной HTML-шаблон
      filename: "index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Указываем папку для статических файлов
    },
    compress: true,
    port: 9000, // Порт для локального сервера
  },
};
