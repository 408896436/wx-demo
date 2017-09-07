Page({
  data : {
    time : new Date(),
    index : 0,
    array: ['中国', '美国', '巴西', '日本'],
    date : '2017-09-07',
    tds : '23:30',
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    icons: ['success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn', 'success_circle', 'success_no_circle',
      'waiting_circle', 'circle', 'download', 'info_circle', 'cancel', 'search', 'clear']
  },
  rgChanage : function(e)
  {
    console.log(e.detail.value);
  },

  writetext : function(e){
    console.log(e.detail.value);
  },

  finsh : function(e)
  {
     this.setData({time : 1})
  },

  bindPickerChange : function(e){
      this.setData({
        index: e.detail.value
      })
  },

  bindPickerDate : function(e){
    this.setData({
      date: e.detail.value
    })
  },

  bindPickerTime : function(e){
    this.setData({
      tds: e.detail.value
    })
  },

  checkboxChange: function (e){
    console.log(e.detail.value);
  }

});