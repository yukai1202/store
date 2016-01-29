using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using store.Models;

namespace store.DAL
{
    public class CategoryRepository : GenericRepository<Category>
    {
        public CategoryRepository(StoreDB context)
            : base(context)
        {
        }

        public IEnumerable<Category> GetAllCategory()
        {
            return context.Categories.ToList();
        }
    }
}