<template>
<html>
    <link
       rel="stylesheet"
       href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
     />
     <link
       rel="stylesheet"
       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
     />
     <link
       href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
       rel="stylesheet"
     />
    <router-view/>
</html>
</template>

<style>
html {
    font-family : Arial, Helvetica, sans-serif;
}

body {
    background-color:white;
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
    font-family: Arial, Helvetica, sans-serif;
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
    padding-top: 5px;
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    color: #00638a;
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
