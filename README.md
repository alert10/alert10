# alert10

[![NPM](https://img.shields.io/npm/v/alert10?color=red)](https://www.npmjs.com/package/alert10)
[![MIT License](https://img.shields.io/github/license/alert10/alert10.svg?color=blue)](https://github.com/alert10/alert10/blob/next/LICENSE)

Desktop notifications the easy way...

## Installation

```html
<script src="https://cdn.jsdelivr.net/gh/alert10/alert10@main/dist/alert10.min.js"></script>
```

<!--```html
<script src="https://cdn.jsdelivr.net/npm/alert10/dist/alert10.min.js"></script>
```-->

## Usage

```html
<button onclick="notification()">Show Notification</button>
<script>
  function notification() {
    alert10({
      title: "New Message",
      body: "You have 3 new notifications",
      icon: "https://api.dicebear.com/9.x/identicon/svg",
    });
  }
</script>
```
