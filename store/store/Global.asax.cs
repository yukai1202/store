using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using store.Models;

namespace store
{
    public class MvcApplication : System.Web.HttpApplication
    {

        protected void Application_Start()
        {

            log4net.Config.XmlConfigurator.Configure();

            if (HttpContext.Current.IsDebuggingEnabled)
            {
                System.Data.Entity.Database.SetInitializer<StoreDB>(new DemoInitialize1());
                StoreDB db = new StoreDB();
                db.Database.Initialize(true);
            }

            
            
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        public class DemoInitialize1 : DropCreateDatabaseIfModelChanges<StoreDB>
        {
            protected override void Seed(StoreDB context)
            {
                var category = new Category()
                {
                    categoryName = "饮料",
                    remark = "test"
                };

                context.Categories.Add(category);
                //context.SaveChanges();

                var product = new Product()
                {
                    category = category,
                    productName = "康师傅矿泉水",
                    DateCreated = DateTime.Now,
                    price = 12.7m,
                    description = "康师傅矿泉水，好好和",
                    total = 109,
                    image = "aaa.jpg"
                };

                context.Products.Add(product);

                base.Seed(context);
            }
        }

    }
}
