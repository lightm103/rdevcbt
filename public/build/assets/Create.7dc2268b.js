import{L as v}from"./Admin.afa27876.js";import{H as y,L as S,r as k,a as c,o as d,c as l,b as _,w as m,d as e,e as g,f as u,q as b,F as h,p as A,t as i,g as C,h as L,i as f}from"./app.855e3fae.js";import{S as V}from"./sweetalert2.all.4db0c76e.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const N={layout:v,components:{Head:y,Link:S},props:{errors:Object,exam:Object,exam_session:Object,students:Array},setup(a){const t=k({exam_id:a.exam.id,student_id:[],allSelected:!1});return{form:t,selectAll:()=>{t.allSelected?t.student_id=a.students.map(r=>r.id):t.student_id=[]},submit:()=>{L.Inertia.post(`/admin/exam_sessions/${a.exam_session.id}/enrolle/store`,{exam_id:t.exam_id,student_id:t.student_id},{onSuccess:()=>{V.fire({title:"Success!",text:"Enrolle Siswa Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},j=e("title",null,"Enrolle Siswa - Aplikasi Ujian Online",-1),E={class:"container-fluid mb-5 mt-5"},H={class:"row"},O={class:"col-md-12"},D=e("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),K=f(" Kembali"),U={class:"card border-0 shadow"},F={class:"card-body"},M=e("h5",null,[e("i",{class:"fa fa-user-plus"}),f(" Enrolle Siswa")],-1),q=e("hr",null,null,-1),I={class:"table-responsive mb-4"},J={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},R={class:"thead-dark"},T={class:"border-0"},z={class:"border-0 rounded-start",style:{width:"5%"}},G=e("th",{class:"border-0"},"Nama Siswa",-1),P=e("th",{class:"border-0"},"Kelas",-1),Q=e("th",{class:"border-0"},"Jenis Kelamin",-1),W=e("div",{class:"mt-3"},null,-1),X=["id","value","checked"],Y={class:"text-center"},Z={class:"text-center"},$={key:0,class:"alert alert-danger mt-2"},ee=e("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),te=e("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function se(a,t,n,o,r,oe){const x=c("Head"),p=c("Link");return d(),l(h,null,[_(x,null,{default:m(()=>[j]),_:1}),e("div",E,[e("div",H,[e("div",O,[_(p,{href:`/admin/exam_sessions/${n.exam_session.id}`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:m(()=>[D,K]),_:1},8,["href"]),e("div",U,[e("div",F,[M,q,e("form",{onSubmit:t[3]||(t[3]=g((...s)=>o.submit&&o.submit(...s),["prevent"]))},[e("div",I,[e("table",J,[e("thead",R,[e("tr",T,[e("th",z,[u(e("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=s=>o.form.allSelected=s),onChange:t[1]||(t[1]=(...s)=>o.selectAll&&o.selectAll(...s))},null,544),[[b,o.form.allSelected]])]),G,P,Q])]),W,e("tbody",null,[(d(!0),l(h,null,A(n.students,s=>(d(),l("tr",{key:s.id},[e("td",null,[u(e("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=w=>o.form.student_id=w),id:s.id,value:s.id,number:"",checked:o.form.allSelected},null,8,X),[[b,o.form.student_id]])]),e("td",null,i(s.name),1),e("td",Y,i(s.classroom.title),1),e("td",Z,i(s.gender),1)]))),128))])]),n.errors.student_id?(d(),l("div",$,i(n.errors.student_id),1)):C("",!0)]),ee,te],32)])])])])])],64)}const ie=B(N,[["render",se]]);export{ie as default};
