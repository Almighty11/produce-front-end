var html = '<ul class="sidebar navbar-nav">\
    <li class="nav-item active">\
    <a class="nav-link" href="index.html">\
        <i class="fas fa-fw fa-tachometer-alt"></i>\
        <span>Dashboard</span>\
    </a>\
    </li>\
    <li class="nav-item dropdown">\
      <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
        <i class="fas fa-user-plus"></i>\
        <span>Admin</span>\
      </a>\
      <div class="dropdown-menu" aria-labelledby="pagesDropdown">\
        <h6 class="dropdown-header">Admin:</h6>\
        <a class="dropdown-item" href="register-admin.html">Create Admin</a>\
        <a class="dropdown-item" href="view-admin.html">View Admin</a>\
      </div>\
    </li>\
    <li class="nav-item dropdown">\
      <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
        <i class="fas fa-user-circle"></i>\
        <span>Sellers</span>\
      </a>\
      <div class="dropdown-menu" aria-labelledby="pagesDropdown">\
        <h6 class="dropdown-header">Sellers:</h6>\
        <a class="dropdown-item" href="view-sellers.html">View Sellers</a>\
      </div>\
    </li>\
    <li class="nav-item dropdown">\
      <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
        <i class="fas fa-user-circle"></i>\
        <span>Buyers</span>\
      </a>\
      <div class="dropdown-menu" aria-labelledby="pagesDropdown">\
        <h6 class="dropdown-header">Buyers:</h6>\
        <a class="dropdown-item" href="view-buyers.html">View Buyers</a>\
      </div>\
    </li>\
    <li class="nav-item dropdown">\
      <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
        <i class="fas fa-credit-card"></i>\
        <span>Transactions</span>\
      </a>\
      <div class="dropdown-menu" aria-labelledby="pagesDropdown">\
        <h6 class="dropdown-header">Transactions:</h6>\
        <a class="dropdown-item" href="view-transactions.html">View Transactions</a>\
      </div>\
    </li>\
    </ul>';

document.getElementById("navMenu").innerHTML = html;
 