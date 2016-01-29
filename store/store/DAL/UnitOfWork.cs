using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using store.Models;

namespace store.DAL
{
    public class UnitOfWork : IDisposable
    {
        private StoreDB context = new StoreDB();
        private GenericRepository<Address> addressRepository;
        private CategoryRepository categoryRepository;
        private GenericRepository<Customer> customerRepository;
        private GenericRepository<Order> orderRepository;
        private GenericRepository<OrderItem> orderItemRepository;
        private GenericRepository<Product> productRepository;
        private GenericRepository<Rating> ratingRepository;
         

        public GenericRepository<Address> AddressRepository
        {
            get
            {
                if (this.addressRepository == null)
                {
                    this.addressRepository = new GenericRepository<Address>(context);
                }
                return addressRepository;
            }
        }

        public CategoryRepository CategoryRepository
        {
            get
            {
                if (this.categoryRepository == null)
                {
                    this.categoryRepository = new CategoryRepository(context);
                }
                return categoryRepository;
            }
        }

        public GenericRepository<Customer> CustomerRepository
        {
            get
            {
                if (this.customerRepository == null)
                {
                    this.customerRepository = new GenericRepository<Customer>(context);
                }
                return customerRepository;
            }
        }

        public GenericRepository<Order> OrderRepository
        {
            get
            {
                if (this.orderRepository == null)
                {
                    this.orderRepository = new GenericRepository<Order>(context);
                }
                return orderRepository;
            }
        }

        public GenericRepository<OrderItem> OrderItemRepository
        {
            get
            {
                if (this.orderItemRepository == null)
                {
                    this.orderItemRepository = new GenericRepository<OrderItem>(context);
                }
                return orderItemRepository;
            }
        }

        public GenericRepository<Product> ProductRepository
        {
            get
            {
                if (this.productRepository == null)
                {
                    this.productRepository = new GenericRepository<Product>(context);
                }
                return productRepository;
            }
        }

        public GenericRepository<Rating> RatingRepository
        {
            get
            {
                if (this.ratingRepository == null)
                {
                    this.ratingRepository = new GenericRepository<Rating>(context);
                }
                return ratingRepository;
            }
        }

        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}