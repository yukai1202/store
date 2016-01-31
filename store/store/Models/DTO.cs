using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace store.Models
{
    public class HomeData
    {
        public List<Category> categories { get; set; }
        public List<Product> products { get; set; }
    }

    public class CategoryDTO
    {
        public int categoryId { get; set; }
        public string categoryName { get; set; }
        public string remark { get; set; }

    }

    public class ProductDTO
    { 
        public int productId { get; set; }

        public ProductDTO() 
        {
            this.productUID = System.Guid.NewGuid().ToString("N");
            productId = -1;
        }

        public string productUID { get; set; }

        public int categoryId { get; set; }

        public string productName { get; set; }

        public string description { get; set; }

        public string image { get; set; }

        public decimal price { get; set; }

        public DateTime DateCreated { get; set; }

        public int total { get; set; }
    }
}