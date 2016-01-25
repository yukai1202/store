using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using store.Models;


namespace store.Controllers
{
    public class HomeController : Controller
    {

        log4net.ILog log = log4net.LogManager.GetLogger(typeof(HomeController));

        public ActionResult Index()
        {

            log.Info("testtestsetest");

            try
            {
                using (StoreDB db = new StoreDB())
                {
                   var result = db.Products.Select(s => s.productId == 1);
                }
            }
            catch (Exception e)
            {
                
                throw;
            }
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}