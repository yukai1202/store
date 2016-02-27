using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace store.Models
{
    [Table("order")]
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int orderId { get; set; }

        public Order()
        {
            this.orderUID = System.Guid.NewGuid().ToString("N");
            this.Status = (int)OrderEnum.Prepare;
        }

        public string orderUID { get; set; }

        public int customerId { get; set; }
        [ForeignKey("customerId")]
        public virtual Customer customer { get; set; }

        [DisplayName("备注")]
        public string remark { get; set; }

        public int Status { get; set; }
    }
}