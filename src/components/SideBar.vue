<template>
  <div class="wrapper">
    <!--Top Menu & Menu button-->
    <div class="sidebar">
      <ul>
        <li>
          <router-link to="/Home"
            ><span class="icon"><i class="fas fa-home"></i></span>
            <span class="item">Home</span></router-link
          >
        </li>
        <li>
          <router-link to="/Profile"
            ><span class="icon"><i class="fas fa-desktop"></i></span>
            <span class="item">Profile</span></router-link
          >
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
  background: rgba(0, 0, 0, 0.178);
  position: relative;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  margin-right: 10px;
  transition: all 0.5s ease;
  border-right: 10px solid rgba(0, 0, 0, 0.062);
}

.wrapper .sidebar ul li a {
  display: block;
  padding: 13px 0px;
  color: black;
  font-size: 16px;
  position: relative;
}
.wrapper .sidebar ul li a .icon {
  color: black;
  width: 30px;
  display: inline-block;
  transform: scale(1.8);
}
.wrapper .sidebar ul {
  margin-top: 60px;
}
.wrapper .sidebar ul li a:hover,
.wrapper .sidebar ul li a.active {
  color: #00303F;
  background: rgba(13, 14, 13, 0.055);
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