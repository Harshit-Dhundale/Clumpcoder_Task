import { Toaster } from "react-hot-toast"
import { AppProvider } from "./context/AppContext"
import Sidebar from "./components/Layout/Sidebar"
import Header from "./components/Layout/Header"
import StatsCard from "./components/Dashboard/StatsCard"
import CategoryForm from "./components/Forms/CategoryForm"
import QuestionForm from "./components/Forms/QuestionForm"
import CategoryList from "./components/Lists/CategoryList"
import QuestionList from "./components/Lists/QuestionList"
import "./App.css"

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-100">
        <Sidebar />

        <div className="ml-64 flex flex-col min-h-screen">
          <Header />

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard title="Total views" value="$3,456K" change="0.43%" changeType="positive" iconType="eye" />
                <StatsCard title="Total Profit" value="$45.2K" change="4.35%" changeType="positive" iconType="cart" />
                <StatsCard title="Total Product" value="2,450" change="2.59%" changeType="positive" iconType="bag" />
                <StatsCard title="Total Users" value="3,456" change="0.95%" changeType="negative" iconType="users" />
              </div>

              {/* Forms Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <CategoryForm />
                <QuestionForm />
              </div>

              {/* Lists Section */}
              <div className="space-y-6">
                <CategoryList />
                <QuestionList />
              </div>
            </div>
          </main>
        </div>
      </div>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </AppProvider>
  )
}

export default App
