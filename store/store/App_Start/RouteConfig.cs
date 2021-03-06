﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace store
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Mobile",
                url: "mobile/{action}/{id}",
                defaults: new { controller = "Mobile", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "MobilePage",
                url: "mobile/{action}/{categoryId}/{pageIndex}/{pageSize}",
                defaults: new { controller = "Mobile", action = "Index", categoryId = UrlParameter.Optional, pageSize = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );


        }
    }
}
