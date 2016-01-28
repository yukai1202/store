using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace store.Models
{
    [Table("product")]
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int productId { get; set; }

        public Product() 
        {
            this.productUID = System.Guid.NewGuid().ToString("N");
        }

        public string productUID { get; set; }

        public int categoryId { get; set; }
        [ForeignKey("categoryId")]
        public virtual Category category { get; set; }

        [DisplayName("名称")]
        public string productName { get; set; }

        public string description { get; set; }

        [Column("images")]
        public string image { get; set; }

        [DisplayName("价格")]
        public decimal price { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime DateCreated { get; set; }

        public int total { get; set; }



    }
}