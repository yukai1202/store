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
                string[] array = "饮料,水果,休闲零食,面包,乳制品,速冻食品,方便面,酒,香烟,油,米面,蛋肉".Split(',');

                foreach (var str in array)
                {
                    var category = new Category()
                    {
                        categoryName = str,
                        remark = "test"
                    };

                    context.Categories.Add(category);
                }
                //context.SaveChanges();

                var product = new Product()
                {
                    categoryId = 1,
                    productName = "康师傅矿泉水",
                    DateCreated = DateTime.Now,
                    price = 12.7m,
                    description = "%u5EB7%u5E08%u5085%u77FF%u6CC9%u6C34%uFF0C%u597D%u597D%u548C",
                    total = 109,
                    image = "aaa.jpg"
                };

                context.Products.Add(product);

                base.Seed(context);
            }
        }

    }
}
