²# Bioskop API

API ini dibuat untuk mengelola informasi film, studio bioskop, waktu tayang, dan pemesanan tiket. API ini dibangun menggunakan Node.js, Express.js, Sequelize, Validator, dan MySQL.

## Fitur

- Menambah, mengupdate, dan menghapus film.
- Mengelola studio bioskop.
- Menampilkan waktu tayang film.
- Mengelola pemesanan tiket.

## Teknologi yang Digunakan

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- Validator.js 

## Prerequisites

Sebelum memulai, pastikan Anda memiliki hal-hal berikut:

- Node.js dan npm terinstal di komputer Anda.
- MySQL terinstal dan berjalan.

## Instalasi

1. **Clone repositori ini:**

- git clone <repository-url>
- cd bioskop-api
- npm install

## Konfigurasi Config ke MySql

Buatlah folder dengan nama config, lalu buat file dengan nama config.json untuk menghubungkan api ke mysql.

contoh config.json :

{
  "development": {
    "username": "your_username",
    "password": "your_password",
    "database": "your_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
