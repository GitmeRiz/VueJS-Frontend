import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutUs from "../views/AboutUs.vue";
import FeedBack from "../views/FeedBack.vue";
import TheMakanan from "../views/TheMakanan.vue";
import FoodDetail from "../views/FoodDetail.vue";
import SuccessOrder from "../views/SuccessOrder.vue";
import AddProduct from "../views//AddProduct.vue";
import UpdateProduct from "../views/UpdateProduct.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "TheMakanan",
    component: TheMakanan,
  },
  {
    path: "/products/:id",
    name: "FoodDetail",
    component: FoodDetail,
  },
  {
    path: "/success-order",
    name: "SuccessOrder",
    component: SuccessOrder,
  },
  {
    path: "/feedback",
    name: "FeedBack",
    component: FeedBack,
  },
  {
    path: "/about",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/addproduct",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/updateproduct/:id",
    name: "UpdateProduct",
    component: UpdateProduct,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
