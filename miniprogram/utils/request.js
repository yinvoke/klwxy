const request = (params) => {
  const {
    url,
    method = 'get',
    header = {},
    data = {},
    resolveFc = undefined
  } = params
  const token = wx.getStorageSync('token');
  const _header = {
    'content-type': 'application/x-www-form-urlencoded',
    ...token,
    ...header
  }
  return new Promise((resolve, reject) =>
    wx.request({
      url,
      header: _header,
      data,
      method,
      success(res) {
        if (resolveFc) {
          resolveFc(res)
        } else {
          if (res?.data)
            resolve(res.data)
          else
            reject({
              msg: '请求失败',
              url,
              method,
              data,
              header,
              err,
            })
        }

      },
      fail(err) {
        if (resolveFc) {
          resolveFc(res)
        } else {
          reject({
            msg: '请求失败',
            url,
            method,
            data,
            header,
            err,
          })
        }

      }
    })
  );
}

export default request