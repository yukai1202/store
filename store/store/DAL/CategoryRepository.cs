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

        public IQueryable<CategoryDTO> GetAllCategory()
        {
            var categories = from c in context.Categories
                             select new CategoryDTO() { 
                                categoryId = c.categoryId,
                                categoryName = c.categoryName,
                                remark = c.remark
                             };
            return categories;
        }

        public IQueryable<ProductDTO> GetAllProduct()
        {
            var products = from p in context.Products
                           select new ProductDTO()
                           {
                               productUID = p.productUID,
                               productName = p.productName,
                               price = p.price,
                               description = p.description,
                               DateCreated = p.DateCreated,
                               total = p.total
                           };
            return products;
        }

        public IQueryable<ProductDTO> GetProductsByCategory(string id)
        {
            var products = from p in context.Products
                           where id.Equals(p.productId)
                           select new ProductDTO()
                           {
                               productUID = p.productUID,
                               productName = p.productName,
                               price = p.price,
                               description = p.description,
                               DateCreated = p.DateCreated,
                               total = p.total
                           };
            return products;
        }
    }
}