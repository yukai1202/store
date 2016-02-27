using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace store.Models
{
    public enum OrderEnum
    {
        Closed = 0,  //订单关闭
        Prepare = 1, //准备订单,配货中
        Sending = 2, //配送中
        Finished = 3, //完成
    }
}