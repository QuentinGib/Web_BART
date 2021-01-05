<template>
  <html>
      <div class="main-header">
        <header>
            <h1>PI^2</h1>
        </header>
    </div>
  </html>
  <router-view/>
</template>

<style>
html {
    font-family : 'Baloo Tammudu 2', cursive, Calibri, Arial, Verdana, Geneva, Tahoma, sans-serif;
}

body {
    background-color: whitesmoke;
}

/* HEADER */

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.main-header {
    background-color: #202020;
    color: #ffffff;
    padding-bottom: 1px;
    box-shadow: 0px 1px 15px black;
}

#main-title {
    display: flex;
    flex-direction: column;
}

#logo {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#logo-text {
    font-family: 'Bad Script', cursive;
}

/* SIGN-IN and NAV */

#sign-in a {
    margin-right: 60px;
    color: #6fffdb;
    text-decoration: none;
}

#sign-in a:hover {
    color: #ffd59e;
}
/* MAIN and ARTICLE */

#theme {
    font-size: 3em;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    font-family: 'Bad Script', cursive;
}

main {
    width: 1200px;
    margin: auto;
    margin-bottom: 40px;
}

.main {
    display: flex;
}

article, aside {
    text-align: justify;
}

article {
    margin-right: 40px;
    flex: 3;
}

article h1 {
    font-size: 2.5em;
}

/* ASIDE */

aside {
    border-left: 1px solid black;
    margin-top: 90px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

aside h1 {
    margin-bottom: 50px;
    font-size: 1.75em;
}

aside a {
    line-height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

aside a {
    color: #00008b;
    text-decoration: none;
}

aside a p:hover {
    font-weight: bold;
}

/* NAVIGATION ASIDE */

#Ibox {
    margin-bottom: 25px;
}

#Ibox h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

#Ibox > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-decoration: none;
}

#Ibox >ul >li {
    line-height: 30px;
}

#Ibox >ul >li >a:link {
    color: #00008b;
    font-weight: bold;
}

#Ibox >ul >li >a:hover {
    color: #3679d1;
}

/* OPERATION */

.tableau {
    width:"60%";
}

.op {
    text-align: center;
    font-weight: bold;
}
</style>
