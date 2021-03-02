<template>
<body>
  <main>
    <h1 id="theme">B.A.R.T.</h1>
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="Login">
        <div class="user-box">
          <input
            type="text"
            name=""
            required=""
            id="email"
            v-model="email"
            autocomplete="off"
          />
          <label for="email">Mail</label>
        </div>
        <div class="user-box">
          <input
            name=""
            id="pwd"
            v-model="pwd"
            type="password"
            required=""
            autocomplete="off"
          />
          <label>Password</label>
        </div>
        <button type="submit" class="subbutton">Se connecter</button>
      </form>
    </div>
    <p class="mdpOublie">En cas de perte de votre mot de passe, contactez l'adresse: #email-automatique</p>
  </main>
</body>
</template>

<script>
import VueCookies from 'vue-cookies'
export default {
  name: 'Authentification',
  components: {
  },
  data () {
    return {
      login: {
        email: '',
        pwd: '',
        rôle: ''
      }
    }
  },
  methods: {
    Login () {
      const email = this.email
      const pwd = this.pwd
      fetch('http://localhost:3000/client/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          pwd
        })
      })
        .then(res => {
          if (res.status === 401) { alert('Invalid credential') }
          if (res.status === 200) {
            alert('Login sucessfull')
            res.json()
              .then(res => {
                VueCookies.set('role', res.rôle, '1h')
                VueCookies.set('key', res.pub_key, '1h')
                this.$router.push({
                  name: 'Home',
                  query: { redirect: '/Home' }
                })
              })
          }
        })
        .catch(error => { this.error = error })
    }
  }
}
</script>

<style>
.mdpOublie {
  position: absolute;
  top: 90%;
  left: 50%;
}

.login-box {
  font-family: sans-serif;
  background: linear-gradient(#00638a, #009edc);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 25px;
}
.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}
.login-box .user-box {
  position: relative;
}
.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #45dbd4;
  font-size: 12px;
}
.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #45dbd4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}
.subbutton {
  border: 1.5px solid #fff;
  font-size: 16px;
  color: #fff;
  height: 2.25rem;
  line-height: 1.25rem;
  margin-top: 0.25rem;
  padding: 0.25rem 0.5rem;
  width: 15rem;
  transition: all 0.25s;
  background: #0093CD;
  margin-top: 0.625rem;
  order: 4;
  outline: 1px dashed transparent;
  outline-offset: 2px;
  padding-left: 0;
  border-radius: 10px;
}
.subbutton:hover {
  color:#45dbd4;
  border: 1.5px solid#45dbd4;
  background: #0093CD;
}
.subbutton:active {
  color: #0093CD;
  border: 1.5px solid#45dbd4;
  background:#45dbd4;
  transition: all 0.125s;
}
</style>
