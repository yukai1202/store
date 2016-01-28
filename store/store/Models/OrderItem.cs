using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace store.Models
{
    [Table("orderitem")]
    public class OrderItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int orderItemId { get; set; }

        public int orderId { get; set; }
        [ForeignKey("orderId")]
        public virtual Order order { get; set; }

        public int productId { get; set; }
        [ForeignKey("productId")]
        public virtual Product product { get; set; }

        public int quantity { get; set; }
    }
}