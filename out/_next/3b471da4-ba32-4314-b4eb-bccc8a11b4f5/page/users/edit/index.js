
          window.__NEXT_REGISTER_PAGE('/users/edit', function() {
            var comp = module.exports=webpackJsonp([5],{334:function(e,t,a){e.exports=a(335)},335:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(12),l=r(u),s=a(13),d=r(s),o=a(3),f=r(o),i=a(1),c=r(i),p=a(2),m=r(p),h=a(4),v=r(h),w=a(5),E=r(w),g=a(27),y=r(g),_=a(0),S=r(_),C=a(11),b=a(10),P=n(b),M=a(44),O=r(M),k=a(336),U=r(k),x=a(337),F=r(x),j=a(7),R=a(45),A=r(R),B=a(16),I=n(B),N=function(e){function t(){return(0,c.default)(this,t),(0,v.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.props,t=e.currentUser,a=e.id;return"undefined"==typeof window||t&&t.uid===a?S.default.createElement(O.default,null,S.default.createElement(j.Row,null,S.default.createElement(j.Col,{md:{size:6,offset:3}},S.default.createElement(F.default,{id:a}))),S.default.createElement(j.Row,null,S.default.createElement(j.Col,{md:{size:6,offset:3}},S.default.createElement(U.default,{id:a})))):y.default.push("/users?id="+a)}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,d.default)(l.default.mark(function e(t){var a=t.dispatch,n=(t.getState,t.query.id);t.res;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(P.retrieveUser(n));case 2:return e.abrupt("return",{id:n});case 3:case"end":return e.stop()}},e,this)}));return e}()}]),t}(S.default.Component);t.default=(0,A.default)((0,C.connect)(function(e){return{currentUser:I.getCurrentUser(e)}},{})(N))},336:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(12),l=r(u),s=a(13),d=r(s),o=a(21),f=r(o),i=a(3),c=r(i),p=a(1),m=r(p),h=a(2),v=r(h),w=a(4),E=r(w),g=a(5),y=r(g),_=a(0),S=r(_),C=a(11),b=a(10),P=n(b),M=a(16),O=n(M),k=a(33),U=r(k),x=a(7),F={passwordOld:"",passwordNew:"",passwordConfirm:""},j=function(e){function t(){var e,a,n,r,u=this;(0,m.default)(this,t);for(var s=arguments.length,o=Array(s),i=0;i<s;i++)o[i]=arguments[i];return a=n=(0,E.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(o))),n.state=F,n.handleChange=function(e){return n.setState((0,f.default)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=(0,d.default)(l.default.mark(function e(t){var a,r,s,d,o,f;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.props,r=a.reauthenticate,s=a.updatePassword,d=n.state,o=d.passwordOld,f=d.passwordNew,e.next=5,r(o);case 5:return e.next=7,s(f);case 7:n.setState(F);case 8:case"end":return e.stop()}},e,u)}));return function(t){return e.apply(this,arguments)}}(),r=a,(0,E.default)(n,r)}return(0,y.default)(t,e),(0,v.default)(t,[{key:"render",value:function(){var e=this.props,t=e.reauthenticateStatus,a=e.updatePasswordStatus,n=this.state,r=n.passwordOld,u=n.passwordNew,l=n.passwordConfirm;return S.default.createElement("div",null,S.default.createElement(x.H4,null,"Change Password"),S.default.createElement("hr",null),S.default.createElement(x.Form,{onSubmit:this.handleSubmit},S.default.createElement(x.FormGroup,null,S.default.createElement(x.AuthLabel,null,"Old Password"),S.default.createElement(x.Input,{name:"passwordOld",onChange:this.handleChange,type:"password",value:r})),S.default.createElement(x.FormGroup,null,S.default.createElement(x.AuthLabel,null,"New Password"),S.default.createElement(x.Input,{name:"passwordNew",onChange:this.handleChange,type:"password",value:u})),S.default.createElement(x.FormGroup,null,S.default.createElement(x.AuthLabel,null,"Confirm Password"),S.default.createElement(x.Input,{name:"passwordConfirm",onChange:this.handleChange,type:"password",value:l})),S.default.createElement(x.FlexRow,null,S.default.createElement(x.ButtonPrimary,{disabled:!this.isValid(),width:165},"Change password"),S.default.createElement("div",null,S.default.createElement(U.default,{status:t}),S.default.createElement(U.default,{status:a})))))}},{key:"isValid",value:function(){var e=this.state,t=e.passwordOld,a=e.passwordNew,n=e.passwordConfirm;return t&&a&&a===n}}]),t}(S.default.Component);t.default=(0,C.connect)(function(e){return{reauthenticateStatus:O.getReauthenticateStatus(e),updatePasswordStatus:O.getUpdatePasswordStatus(e)}},{reauthenticate:P.reauthenticate,updatePassword:P.updatePassword})(j)},337:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(12),l=r(u),s=a(13),d=r(s),o=a(21),f=r(o),i=a(3),c=r(i),p=a(1),m=r(p),h=a(2),v=r(h),w=a(4),E=r(w),g=a(5),y=r(g),_=a(0),S=r(_),C=a(11),b=a(10),P=n(b),M=a(16),O=n(M),k=a(338),U=r(k),x=a(33),F=r(x),j=a(7),R=function(e){function t(e){var a=this;(0,m.default)(this,t);var n=(0,E.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return n.handleChange=function(e){return n.setState((0,f.default)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=(0,d.default)(l.default.mark(function e(t){var r,u,s,d,o,f,i,c,p;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),r=n.props,u=r.token,s=r.updateEmail,d=r.updateUser,o=r.user,f=n.state,i=f.email,c=f.username,e.next=5,s(i);case 5:p=e.sent,p&&d(o.id,{email:i,username:c},u);case 7:case"end":return e.stop()}},e,a)}));return function(t){return e.apply(this,arguments)}}(),n.state={email:e.user.email,username:e.user.username||""},n}return(0,y.default)(t,e),(0,v.default)(t,[{key:"render",value:function(){var e=this.props,t=e.updateEmailStatus,a=e.updateUserStatus,n=this.state,r=n.email;n.username;return S.default.createElement("div",{style:{marginBottom:20}},S.default.createElement(j.H3,null,"Edit User Profile"),S.default.createElement(j.Form,{onSubmit:this.handleSubmit},S.default.createElement(j.FormGroup,null,S.default.createElement(j.AuthLabel,null,"Email"),S.default.createElement(j.Input,{name:"email",onChange:this.handleChange,value:r})),!1,S.default.createElement(j.FlexRow,null,S.default.createElement(j.ButtonPrimary,{width:165},"Save changes"),S.default.createElement("div",null,S.default.createElement(F.default,{status:t}),S.default.createElement(F.default,{status:a})))),S.default.createElement(U.default,{onSuccess:this.handleSubmit}))}}]),t}(S.default.Component);t.default=(0,C.connect)(function(e,t){return{token:O.getToken(e),updateEmailStatus:O.getUpdateEmailStatus(e),updateUserStatus:O.getUpdateUserStatus(e),user:O.getUser(e,t.id)}},{updateEmail:P.updateEmail,updateUser:P.updateUser})(R)},338:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(12),l=r(u),s=a(13),d=r(s),o=a(21),f=r(o),i=a(3),c=r(i),p=a(1),m=r(p),h=a(2),v=r(h),w=a(4),E=r(w),g=a(5),y=r(g),_=a(0),S=r(_),C=a(11),b=a(10),P=n(b),M=a(16),O=n(M),k=a(33),U=r(k),x=a(7),F=function(e){function t(){var e,a,n,r,u=this;(0,m.default)(this,t);for(var s=arguments.length,o=Array(s),i=0;i<s;i++)o[i]=arguments[i];return a=n=(0,E.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(o))),n.state={password:""},n.handleChange=function(e){return n.setState((0,f.default)({},e.target.name,e.target.value))},n.handleCancel=function(){var e=n.props.hideModal;n.setState({password:""}),e()},n.handleSubmit=function(){var e=(0,d.default)(l.default.mark(function e(t){var a,r,s,d;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.props,r=a.onSuccess,s=a.reauthenticate,d=n.state.password,e.next=5,s(d);case 5:r();case 6:case"end":return e.stop()}},e,u)}));return function(t){return e.apply(this,arguments)}}(),r=a,(0,E.default)(n,r)}return(0,y.default)(t,e),(0,v.default)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedModal,a=e.status,n=this.state.password;return S.default.createElement(x.Modal,{isOpen:"reauth"===t,toggle:this.handleCancel},S.default.createElement(x.Form,{onSubmit:this.handleSubmit},S.default.createElement(x.ModalHeader,{toggle:this.handleCancel},"Save account changes"),S.default.createElement(x.ModalBody,null,S.default.createElement("p",null,"Re-enter your password to make changes to your account."),S.default.createElement(x.FormGroup,null,S.default.createElement(x.Input,{name:"password",onChange:this.handleChange,placeholder:"Password",type:"password",value:n}))),S.default.createElement(x.ModalFooter,null,S.default.createElement(U.default,{status:a}),S.default.createElement(x.Button,{onClick:this.handleCancel,type:"button"},"Cancel"),S.default.createElement(x.ButtonPrimary,null,"Save changes"))))}}]),t}(S.default.Component);t.default=(0,C.connect)(function(e){return{selectedModal:O.getSelectedModal(e),status:O.getReauthenticateStatus(e)}},{hideModal:P.hideModal,reauthenticate:P.reauthenticate})(F)}},[334]);
            return { page: comp.default }
          })
        