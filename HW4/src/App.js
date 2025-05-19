// App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField, Typography, Box } from '@mui/material';

const PAGE_SIZE = 10;

function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(0);

  // 取得資料
  useEffect(() => {
    fetch('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  // 過濾資料
  const filtered = useMemo(() => {
    return data.filter(item =>
      item.title && item.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [data, keyword]);

  // 分頁資料
  const rows = useMemo(() => {
    return filtered
      .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
      .map((item, index) => ({
        id: index + 1 + page * PAGE_SIZE,
        title: item.title,
        location: item.showInfo[0]?.location || '',
        price: item.showInfo[0]?.price || '',
      }));
  }, [filtered, page]);

  // 欄位定義
  const columns = [
    { field: 'id', headerName: '編號', width: 90 },
    { field: 'title', headerName: '名稱', flex: 1 },
    { field: 'location', headerName: '地點', flex: 1 },
    { field: 'price', headerName: '票價', flex: 1 },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        景點觀光展覽資訊
      </Typography>

      <TextField
        label="搜尋名稱"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
          setPage(0); // 每次搜尋重置回第 1 頁
        }}
      />

      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pagination
          paginationMode="server"
          rowCount={filtered.length}
          pageSizeOptions={[PAGE_SIZE]}
          paginationModel={{ page, pageSize: PAGE_SIZE }}
          onPaginationModelChange={(model) => setPage(model.page)}
        />

      </div>
    </Box>
  );
}

export default App;
