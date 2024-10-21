// App.jsx
import { useState } from 'react'
import './App.css'

const customerData = [
  {
    id: 1,
    name: 'Caden Morse',
    email: 'morse@live.com',
    billingDate: 'JUNE, 12 2023',
    plan: 'TEAM',
    amount: '$5,000/year',
    users: '10 Users',
  },
  {
    id: 2,
    name: 'Santino Marsh',
    email: 'whitney@outlook.net',
    billingDate: 'JUNE, 12 2023',
    plan: 'TEAM',
    amount: '$19,000/year',
    users: '44 Users',
  },
  {
    id: 3,
    name: 'Kristin Zavala',
    email: 'gsryjh@sbcglobal.net',
    billingDate: 'JUNE, 12 2023',
    plan: 'TEAM',
    amount: '$14,000/year',
    users: '32 Users',
  },
  {
    id: 4,
    name: 'Kristin Williams',
    email: 'espear@live.com',
    billingDate: 'JUNE, 12 2023',
    plan: 'TEAM',
    amount: '$5,700/year',
    users: '12 Users',
  },
  {
    id: 5,
    name: 'Cannon Paul',
    email: 'gsnfiles@cloud.com',
    billingDate: 'JUNE, 12 2023',
    plan: 'TEAM',
    amount: '$7,200/year',
    users: '18 Users',
  },
  {
    id: 6,
    name: 'Marlee Merritt',
    email: 'hescala@yahoo.ca',
    billingDate: 'JUNE, 12 2023',
    plan: 'TEAM',
    amount: '$13,800/year',
    users: '30 Users',
  },
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentFilter, setCurrentFilter] = useState('All time')

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <div className="logo-circle"></div>
            ORGANIZED
          </div>
          <div className="nav-search">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="nav-right">
          <div className="profile-icons">
            <div className="notification-icon"></div>
            <div className="profile-avatar"></div>
          </div>
        </div>
      </nav>

      <div className="menu-bar">
        <div className="menu-items">
          <span>Dashboard</span>
          <span>Statistic</span>
          <span>Product</span>
          <span className="active">Customer</span>
          <span>Review</span>
          <span>Settings</span>
        </div>
        <div className="language-selector">
          <span>EN</span>
        </div>
      </div>

      <main className="content">
        <div className="content-header">
          <h1>Customer</h1>
          <div className="header-actions">
            <button className="btn-download">
              <span>↓</span>
            </button>
            <button className="btn-date">
              June, 22 2023
            </button>
            <button className="btn-add">
              Add Customer +
            </button>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-header">
              <span>Total Customer</span>
              <button className="more-options">...</button>
            </div>
            <div className="stat-number">470</div>
            <div className="stat-change positive">
              <span>3.6% ↑</span> from last week
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span>Team Plan</span>
              <button className="more-options">...</button>
            </div>
            <div className="stat-number">17</div>
            <div className="stat-change positive">
              <span>0.5% ↑</span> from last week
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span>Basic Plan</span>
              <button className="more-options">...</button>
            </div>
            <div className="stat-number">63</div>
            <div className="stat-change positive">
              <span>3.0% ↑</span> from last week
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <span>Pelanggan berhenti</span>
              <button className="more-options">...</button>
            </div>
            <div className="stat-number">4</div>
            <div className="stat-change negative">
              <span>2.0% ↓</span> from last week
            </div>
          </div>
        </div>

        <div className="customer-section">
          <div className="filters-bar">
            <div className='left-filters'>
              <h2>Customer List</h2>
            </div>
            <div className="middle-filters">
              <button className="filter-btn active">All time</button>
              <button className="filter-btn">Team plan</button>
              <button className="filter-btn">Active</button>
              <button className="filter-btn with-icon">
                More filters
                <span className="filter-icon">⌄</span>
              </button>
            </div>
            <div className="right-filters">
            
                <input type="text" placeholder="Search" className="search-wrapper" />
    
              <button className="keyboard-btn">K</button>
            </div>
          </div>

          <table className="customers-table">
            <thead>
              <tr>
                <th>FULL NAME + MAIL</th>
                <th>BILLING DATE</th>
                <th>PLAN</th>
                <th>AMOUNT</th>
                <th>TOTAL USERS</th>
                <th>DETAILS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer) => (
                <tr key={customer.id}>
                  <td className="name-cell">
                    <div className="name">{customer.name}</div>
                    <div className="email">{customer.email}</div>
                  </td>
                  <td>{customer.billingDate}</td>
                  <td>
                    <span className="plan-tag">{customer.plan}</span>
                  </td>
                  <td>
                    <div className="amount">{customer.amount}</div>
                    <div className="amount-label">Average</div>
                  </td>
                  <td>{customer.users}</td>
                  <td>
                    <button className="view-details">View Details</button>
                  </td>
                  <td>
                    <button className="more-btn">...</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <div className="results-per-page">
              Result per page: <select><option>6</option></select>
            </div>
            <div className="page-navigation">
              <button className="nav-btn">← Previous</button>
              <div className="page-numbers">
                <button>1</button>
                <button className="active">2</button>
                <button>3</button>
                <span>...</span>
                <button>8</button>
                <button>9</button>
              </div>
              <button className="nav-btn">Next →</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App