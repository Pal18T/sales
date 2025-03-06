import React from 'react'
import './App.css'
import Header from './components/Header'
import FilterTabs from './components/FilterTabs'
import ActionBar from './components/ActionBar'
import Card from './components/Card'
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FilterTabs />
      <ActionBar />
      <Card />
    </div>
  )
}

export default App
