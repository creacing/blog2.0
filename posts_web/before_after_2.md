---
title: before_after2
description: 
date: 2022-6-7
tags:
  - ::before,::after
---
```html
<html>

<head>
    <style>
        .left {
            font-size: 36px;
            font-weight: 700;
            color: #fff;
            cursor: pointer;
            position: relative;
            margin-bottom: 6vh;
            position: absolute;
            top: 50%;
            left: 50%;
        }
        
        .left::after {
            content: " ";
            width: 0;
            height: 4px;
            background-color: #fff;
            position: absolute;
            left: 50%;
            bottom: -20px;
            transition: all .5s;
            transform: translateX(-50%);
            box-sizing: border-box;
        }
        
        .left:hover::after {
            width: 100%;
        }
    </style>
</head>

<body style="background: black;position: relative;">
    <div class="left">demo</div>
</body>

</html>
```