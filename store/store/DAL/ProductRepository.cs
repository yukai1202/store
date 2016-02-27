using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using store.Models;

namespace store.DAL
{
    public class ProductRepository : GenericRepository<ProductRepository>
    {
        public ProductRepository(StoreDB context)
            : base(context)
        {
        }

        
    }
}