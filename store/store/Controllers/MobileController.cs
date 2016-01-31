using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using store.Common;
using store.DAL;
using store.Models;

namespace store.Controllers
{
    public class MobileController : Controller
    {
        log4net.ILog log = log4net.LogManager.GetLogger(typeof(MobileController));

        private UnitOfWork unitOfWork = new UnitOfWork();
        //
        // GET: /Mobile/
        public ActionResult Index()
        {
            return View();
        }


        public JsonResult GetHomeData()
        {
            List<CategoryDTO> categories = null;
            var categoryFromCache = CacheHelper.GetCacheList<IEnumerable<Category>>(Constant.CATEGORY_CACHE);
            if (categoryFromCache != null)
            {

                categories = categoryFromCache as List<CategoryDTO>;
            }
            else
            {
                var result = unitOfWork.CategoryRepository.GetAllCategory().ToList();
                CacheHelper.Put<List<CategoryDTO>>(Constant.CATEGORY_CACHE, result);
                categories = result;
            }

            List<ProductDTO> list = unitOfWork.CategoryRepository.GetAllProduct().ToList();

            

            //HomeData data = new HomeData();
            //data.categories = categories;
            //data.products = list;

           // string Str = JsonConvert.SerializeObject(list);
            return Json(new { categories = categories, products = list, test = "\u5EB7\u5E08\u5085\u77FF\u6CC9\u6C34" }, "application/json", JsonRequestBehavior.AllowGet);
        }



        //
        // GET: /Mobile/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /Mobile/Create
        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /Mobile/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Mobile/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Mobile/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Mobile/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Mobile/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
