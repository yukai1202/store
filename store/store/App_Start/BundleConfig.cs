﻿using System.Web;
using System.Web.Optimization;

namespace store
{
    public class BundleConfig
    {
        // 有关绑定的详细信息，请访问 http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/mob/lib/angular.js",
                        "~/Scripts/mob/lib/angular-ui-router.js",
                         "~/Scripts/mob/lib/angular-resource.js",
                         "~/Scripts/mob/lib/ng-device-detector.js",
                        "~/Scripts/mob/lib/lib.js",
                        "~/Scripts/mob/models/model.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Scripts/mob/app.js",
                        "~/Scripts/mob/controller/nav.js",
                        "~/Scripts/mob/controller/home.js",
                        "~/Scripts/mob/controller/order.js",
                        "~/Scripts/mob/controller/confirm.js",
                        "~/Scripts/mob/controller/selectadd.js",
                        "~/Scripts/mob/controller/newadd.js",
                        "~/Scripts/mob/controller/result.js",
                        "~/Scripts/mob/controller/login.js",
                        "~/Scripts/mob/controller/register.js",

                        "~/Scripts/mob/service/service.js",
                        "~/Scripts/mob/directive/scrollDirective.js",
                        "~/Scripts/mob/directive/resizeheightDirective.js"
                        ));
            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            // 使用要用于开发和学习的 Modernizr 的开发版本。然后，当你做好
            // 生产准备时，请使用 http://modernizr.com 上的生成工具来仅选择所需的测试。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/font-awesome.css",
                      "~/Content/pure.css",
                      "~/Content/site.css"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js",
            //          "~/Scripts/respond.js"));

            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //          "~/Content/bootstrap.css",
            //          "~/Content/site.css"));
            BundleTable.EnableOptimizations = false;
        }
    }
}
