<template>
  <div class="wrapper">
    <!--Top Menu & Menu button-->
    <div class="sidebar">
      <ul>
        <li>
          <a href="#" class="active">
            <span class="icon"><i class="fas fa-home"></i></span>
            <span class="item">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><i class="fas fa-desktop"></i></span>
            <span class="item">Profile</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
* {
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  z-index: 1;
}
body {
  background: #f5f6fa;
}
.wrapper .sidebar {
  background: #CDAC81;
  position: relative;
  top: 61.5px;
  left: 0;
  width: 15vh;
  height: 100vh;
  padding: 10px 0;
  transition: all 0.5s ease;
}
.wrapper .sidebar ul li a {
  display: block;
  padding: 13px 30px;
  color: black;
  font-size: 16px;
  position: relative;
}
.wrapper .sidebar ul li a .icon {
  color: black;
  width: 30px;
  display: inline-block;
}
.wrapper .sidebar ul li a:hover,
.wrapper .sidebar ul li a.active {
  color: #00303F;
  background: #CAE4DB;
  border-right: 2px solid black;
}
.wrapper .sidebar ul li a:hover .icon,
.wrapper .sidebar ul li a.active .icon {
  color: #00303F;
}
.wrapper .sidebar ul li a:hover:before,
.wrapper .sidebar ul li a.active:before {
  display: block;
}
@media (min-device-width: 320px) and (max-device-width: 480px) {
  .item {
    display: none;
  }
  .wrapper .sidebar ul li a {
    border: none;
  }
}
</style>