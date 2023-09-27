import { Routes, Route } from 'react-router-dom';
import { Dashboard, UnderConstruction } from './pages';
import { SideBar } from './components';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextDisabled: '#000',
          controlItemBgHover: '#EDF2FF'
        },
        components: {
          Collapse: {
            headerBg: '#fff',
            headerPadding: '1.125rem 1rem',
            contentBg: '#F9FAFF',
            colorBorder: '#eee'
          }
        }
      }}
    >
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </ConfigProvider>
  );
}

export default App;
