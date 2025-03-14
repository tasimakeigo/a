// server.js
const express = require('express');
const path = require('path');
const app = express();

// ルートをインポート
const markerRoutes2 = require('./routes/markerRoutes2'); // markerRoutesをインポート
const adminlogin = require('./routes/admin'); // adminログインルートをインポート
const user = require('./routes/users'); // userログインルートをインポート
const newadmin = require('./routes/newAdmin'); // 新規adminルートをインポート
const modellistRoutes = require('./routes/modellistRoutes'); // モデルリストのルートをインポート
const napisyRoutes = require('./routes/napisyRoutes');
const soundRoutes = require('./routes/soundRoutes');
const napisylistRoutes = require('./routes/napisylistRoutes');
const soundlistRoutes = require('./routes/soundlistRoutes');
const locationRoutes = require('./routes/locationRoutes');
const locationdetailRoutes = require('./routes/locationdetailRoutes');
const locationaddRoutes = require('./routes/locationaddRoutes');
const locationeditRoutes = require('./routes/locationeditRoutes');
const modelsRoutes = require('./routes/modelsRoutes');
const multiAR = require('./routes/multiAR');
const get_locations = require('./routes/get_locations');

// ボディパーサー設定 (POSTデータを受け取るため)
app.use(express.urlencoded({ extended: true }));  // URLエンコードされたデータの処理
app.use(express.json());  // JSONデータの処理

// public フォルダを静的ファイルの提供場所として指定
app.use(express.static(path.join(__dirname, 'public')));  // 'public' フォルダを静的ファイルとして公開

// APIエンドポイントを設定
app.use('/api', markerRoutes2);  // /api/markerinfo2 にアクセスできるように設定
app.use('/api', adminlogin);     // /api/login エンドポイントが有効になります
app.use('/api', user);     // /api/login エンドポイントが有効になります
app.use('/api', newadmin);       // /api/newAdmin エンドポイントが有効になります
app.use('/modellist', modellistRoutes); // /modellist エンドポイントが有効になります
app.use('/napisy', napisyRoutes);
app.use('/sound', soundRoutes);
app.use('/napisylist', napisylistRoutes);
app.use('/soundlist', soundlistRoutes);
app.use('/location', locationRoutes);
app.use('/locationdetail', locationdetailRoutes);
app.use('/locationadd', locationaddRoutes);
app.use('/locationedit', locationeditRoutes);
app.use('/modelsRoutes', modelsRoutes);
app.use('/multiAR', multiAR);
app.use('/api', get_locations);

// サーバーの起動
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`サーバーが http://localhost:${PORT} で起動しました`);
});
