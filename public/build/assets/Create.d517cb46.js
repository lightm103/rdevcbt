import{L as y}from"./Admin.afa27876.js";import{H as g,L as S,r as L,a as _,o as r,c as i,b as u,w as f,d as s,e as V,f as l,v as m,t as d,g as c,s as h,F as b,p as x,h as N,i as w}from"./app.855e3fae.js";import{S as M}from"./sweetalert2.all.4db0c76e.js";import{_ as U}from"./_plugin-vue_export-helper.cdc0426e.js";const P={layout:y,components:{Head:g,Link:S},props:{errors:Object,classrooms:Array},setup(){const n=L({nisn:"",name:"",classroom_id:"",gender:"",password:"",password_confirmation:""});return{form:n,submit:()=>{N.Inertia.post("/admin/students",{nisn:n.nisn,name:n.name,classroom_id:n.classroom_id,gender:n.gender,password:n.password,password_confirmation:n.password_confirmation},{onSuccess:()=>{M.fire({title:"Success!",text:"Siswa Berhasil Disimpan.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},B=s("title",null,"Tambah Siswa - Aplikasi Ujian Online",-1),C={class:"container-fluid mb-5 mt-5"},K={class:"row"},H={class:"col-md-12"},T=s("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),A=w(" Kembali"),D={class:"card border-0 shadow"},j={class:"card-body"},F=s("h5",null,[s("i",{class:"fa fa-user"}),w(" Tambah Siswa")],-1),O=s("hr",null,null,-1),E={class:"row"},I={class:"col-md-6"},J={class:"mb-4"},R=s("label",null,"Nisn",-1),q={key:0,class:"alert alert-danger mt-2"},z={class:"col-md-6"},G={class:"mb-4"},Q=s("label",null,"Nama Lengkap",-1),W={key:0,class:"alert alert-danger mt-2"},X={class:"row"},Y={class:"col-md-6"},Z={class:"mb-4"},$=s("label",null,"Kelas",-1),ss=["value"],os={key:0,class:"alert alert-danger mt-2"},ts={class:"col-md-6"},es={class:"mb-4"},as=s("label",null,"Jenis Kelamin",-1),ns=s("option",{value:"L"},"Laki - Laki",-1),rs=s("option",{value:"P"},"Perempuan",-1),is=[ns,rs],ls={key:0,class:"alert alert-danger mt-2"},ds={class:"row"},cs={class:"col-md-6"},ms={class:"mb-4"},_s=s("label",null,"Password",-1),us={key:0,class:"alert alert-danger mt-2"},fs={class:"col-md-6"},hs={class:"mb-4"},bs=s("label",null,"Konfirmasi Password",-1),ws=s("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),vs=s("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function ps(n,t,a,e,ks,ys){const v=_("Head"),p=_("Link");return r(),i(b,null,[u(v,null,{default:f(()=>[B]),_:1}),s("div",C,[s("div",K,[s("div",H,[u(p,{href:"/admin/students",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:f(()=>[T,A]),_:1}),s("div",D,[s("div",j,[F,O,s("form",{onSubmit:t[6]||(t[6]=V((...o)=>e.submit&&e.submit(...o),["prevent"]))},[s("div",E,[s("div",I,[s("div",J,[R,l(s("input",{type:"text",class:"form-control",placeholder:"Masukkan Nisn Siswa","onUpdate:modelValue":t[0]||(t[0]=o=>e.form.nisn=o)},null,512),[[m,e.form.nisn]]),a.errors.nisn?(r(),i("div",q,d(a.errors.nisn),1)):c("",!0)])]),s("div",z,[s("div",G,[Q,l(s("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Siswa","onUpdate:modelValue":t[1]||(t[1]=o=>e.form.name=o)},null,512),[[m,e.form.name]]),a.errors.name?(r(),i("div",W,d(a.errors.name),1)):c("",!0)])])]),s("div",X,[s("div",Y,[s("div",Z,[$,l(s("select",{class:"form-select","onUpdate:modelValue":t[2]||(t[2]=o=>e.form.classroom_id=o)},[(r(!0),i(b,null,x(a.classrooms,(o,k)=>(r(),i("option",{key:k,value:o.id},d(o.title),9,ss))),128))],512),[[h,e.form.classroom_id]]),a.errors.classroom_id?(r(),i("div",os,d(a.errors.classroom_id),1)):c("",!0)])]),s("div",ts,[s("div",es,[as,l(s("select",{class:"form-select","onUpdate:modelValue":t[3]||(t[3]=o=>e.form.gender=o)},is,512),[[h,e.form.gender]]),a.errors.gender?(r(),i("div",ls,d(a.errors.gender),1)):c("",!0)])])]),s("div",ds,[s("div",cs,[s("div",ms,[_s,l(s("input",{type:"password",class:"form-control",placeholder:"Masukkan Password","onUpdate:modelValue":t[4]||(t[4]=o=>e.form.password=o)},null,512),[[m,e.form.password]]),a.errors.password?(r(),i("div",us,d(a.errors.password),1)):c("",!0)])]),s("div",fs,[s("div",hs,[bs,l(s("input",{type:"password",class:"form-control",placeholder:"Masukkan Konfirmasi Password","onUpdate:modelValue":t[5]||(t[5]=o=>e.form.password_confirmation=o)},null,512),[[m,e.form.password_confirmation]])])])]),ws,vs],32)])])])])])],64)}const xs=U(P,[["render",ps]]);export{xs as default};
