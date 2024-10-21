!function(){"use strict";var e="";const t={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-button",inactiveButtonClass:"modal__submit-button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},o=(e,t,o)=>{const n=e.querySelector(`#${t.id}-error`);n.textContent="",t.classList.remove(o.inputErrorClass),n.classList.remove(o.errorClass)},n=(e,t,o)=>{(e=>e.some((e=>!e.validity.valid)))(e)?r(t,o):(t.disabled=!1,t.classList.remove(o.inactiveButtonClass))},r=(e,t)=>{e.disabled=!0,e.classList.add(t.inactiveButtonClass)},a=e=>{document.querySelectorAll(e.formSelector).forEach((t=>{((e,t)=>{const r=Array.from(e.querySelectorAll(t.inputSelector)),a=e.querySelector(t.submitButtonSelector);n(r,a,t),r.forEach((c=>{c.addEventListener("input",(function(){((e,t,n)=>{t.validity.valid?o(e,t,n):((e,t,o,n)=>{const r=e.querySelector(`#${t.id}-error`);r.textContent=o,t.classList.add(n.inputErrorClass),r.classList.add(n.errorClass)})(e,t,t.validationMessage,n)})(e,c,t),n(r,a,t)}))}))})(t,e)}))};a(t);var c=e+"d3610e9c6dce3cb370d8.svg",l=e+"d38272e02bb4f1ab1c37.svg",s=e+"2fc47fd8e9a9bcd9612f.jpg",d=e+"40608da7369d39bc1077.svg",i=e+"dba18798529f242c4c6d.svg";new Api({baseUrl:"https://around-api.en.tripleten-services.com/v1",headers:{authorization:"c13b185c-8fbc-40ad-bb6b-9e8300eb8355","Content-Type":"application/json"}}).getInitialCards().then((e=>{console.log(e)})),document.getElementById("images-logo").src=c,document.getElementById("profile-edit-pencil").src=l,document.getElementById("profile-avatar").src=s,document.getElementById("add-profile").src=d,document.getElementById("close-modal").src=i,document.getElementById("close-add-modal-logo").src=i,document.getElementById("preview-close-modal-logo").src=i;const u=document.querySelector(".profile__edit-btn"),m=document.querySelector(".profile__add-btn"),p=document.querySelector(".profile__name"),y=document.querySelector(".profile__description"),_=document.querySelector("#edit-profile-modal"),f=_.querySelector(".modal__form"),v=_.querySelector(".modal__close-button"),b=_.querySelector("#profile-name-input"),g=_.querySelector("#profile-description-input"),S=document.querySelector("#preview-modal"),q=S.querySelector(".modal__image"),h=S.querySelector(".modal__caption"),E=S.querySelector(".modal__close-button_type_preview"),k=document.querySelector("#add-card-modal"),w=k.querySelector(".modal__submit-button"),L=k.querySelector(".modal__form"),C=k.querySelector(".modal__close-button"),x=k.querySelector("#add-card-name-input"),B=k.querySelector("#add-card-link-input"),z=document.querySelector("#card-template"),A=document.querySelector(".cards__list");function j(e){if("Escape"===e.key){const e=document.querySelector(".modal_opened");e&&T(e)}}function I(e){e.classList.add("modal_opened"),document.addEventListener("keydown",j)}function T(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",j)}function D(e){const t=z.content.querySelector(".card").cloneNode(!0),o=t.querySelector(".card__title"),n=t.querySelector(".card__image"),r=t.querySelector(".card__like-button"),a=t.querySelector(".card__delete-button");return o.textContent=e.name,n.src=e.link,n.alt=e.name,r.addEventListener("click",(()=>{r.classList.toggle("card__like-button_liked")})),a.addEventListener("click",(()=>{t.remove()})),n.addEventListener("click",(()=>{I(S),q.src=e.link,q.alt=e.name,h.textContent=e.name})),t}document.querySelectorAll(".modal").forEach((e=>{!function(e){e.addEventListener("click",(t=>{t.target===e&&T(e)}))}(e)})),u.addEventListener("click",(()=>{var e,n,r;b.value=p.textContent,g.value=y.textContent,e=_,n=Array.from(_.querySelectorAll(t.inputSelector)),r=t,n.forEach((t=>{o(e,t,r)})),I(_)})),E.addEventListener("click",(()=>{T(S)})),v.addEventListener("click",(()=>{T(_)})),m.addEventListener("click",(()=>{I(k)})),C.addEventListener("click",(()=>{T(k)})),f.addEventListener("submit",(function(e){e.preventDefault(),p.textContent=b.value,y.textContent=g.value,T(_)})),L.addEventListener("submit",(function(e){e.preventDefault();const o=D({name:x.value,link:B.value});A.prepend(o),e.target.reset(),disableButton(w,t),T(k)})),[{name:"Val Thorens",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},{name:"Restaurant terrace",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},{name:"An outdoor cafe",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},{name:"A very long bridge, over the forest and through the trees",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},{name:"Tunnel with morning light",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},{name:"Mountain house",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"}].forEach((e=>{const t=D(e);A.prepend(t)})),a(t)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmhELFlBQWNxRCxFQUFtQnNDLE1BQ3BEMUMsRUFBMEJqRCxZQUFjc0QsRUFBMEJxQyxNQUNsRXBCLEVBQVdyQixFQUNiLElBcUVBVyxFQUFldEMsaUJBQWlCLFVBbkVoQyxTQUE2QnFFLEdBQzNCQSxFQUFJQyxpQkFDSixNQUNNaEIsRUFBY0YsRUFEQSxDQUFFUyxLQUFNckIsRUFBYzRCLE1BQU9OLEtBQU1yQixFQUFjMkIsUUFFckV6QixFQUFVNEIsUUFBUWpCLEdBQ2xCZSxFQUFJSixPQUFPTyxRQUVYcEYsY0FBY2lELEVBQWtCMUUsR0FDaENxRixFQUFXWixFQUNiLElBM0hxQixDQUNuQixDQUNFeUIsS0FBTSxjQUNOQyxLQUFNLDJIQUVSLENBQ0VELEtBQU0scUJBQ05DLEtBQU0sbUhBRVIsQ0FDRUQsS0FBTSxrQkFDTkMsS0FBTSx5SEFFUixDQUNFRCxLQUFNLDREQUNOQyxLQUFNLDJIQUVSLENBQ0VELEtBQU0sNEJBQ05DLEtBQU0sMEhBRVIsQ0FDRUQsS0FBTSxpQkFDTkMsS0FBTSw0SEFnS0dwRSxTQUFTK0UsSUFDcEIsTUFBTW5CLEVBQWNGLEVBQWVxQixHQUNuQzlCLEVBQVU0QixRQUFRakIsRUFBWSxJQUdoQy9ELEVBQWlCNUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlX3Byb2plY3Rfc3BvdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLy4vc3JjL3NjcmlwdHMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9zZV9wcm9qZWN0X3Nwb3RzLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgZm9ybVNlbGVjdG9yOiBcIi5tb2RhbF9fZm9ybVwiLFxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zdWJtaXQtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX3N1Ym1pdC1idXR0b25fZGlzYWJsZWRcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIlxufVxuXG5jb25zdCBzaG93SW5wdXRFcnJvciA9IChmb3JtRWwsIGlucHV0RWwsIGVycm9yTXNnLCBjb25maWcpID0+IHtcbiAgY29uc3QgZXJyb3JNc2dFbCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuICBlcnJvck1zZ0VsLnRleHRDb250ZW50ID0gZXJyb3JNc2c7XG4gIGlucHV0RWwuY2xhc3NMaXN0LmFkZChjb25maWcuaW5wdXRFcnJvckNsYXNzKTtcbiAgZXJyb3JNc2dFbC5jbGFzc0xpc3QuYWRkKGNvbmZpZy5lcnJvckNsYXNzKTtcbn07XG5cbmNvbnN0IGhpZGVJbnB1dEVycm9yID0gKGZvcm1FbCwgaW5wdXRFbCwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGVycm9yTXNnRWwgPSBmb3JtRWwucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcbiAgZXJyb3JNc2dFbC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZShjb25maWcuaW5wdXRFcnJvckNsYXNzKTtcbiAgZXJyb3JNc2dFbC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5lcnJvckNsYXNzKTtcbn07XG5cbmNvbnN0IGNoZWNrSW5wdXRWYWxpZGl0eSA9IChmb3JtRWwsIGlucHV0RWwsIGNvbmZpZykgPT4ge1xuICBpZiAoIWlucHV0RWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICBzaG93SW5wdXRFcnJvcihmb3JtRWwsIGlucHV0RWwsIGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2UsIGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZUlucHV0RXJyb3IoZm9ybUVsLCBpbnB1dEVsLCBjb25maWcpO1xuICB9XG59O1xuXG5jb25zdCBoYXNJbnZhbGlkSW5wdXQgPSAoaW5wdXRMaXN0KSA9PiB7XG4gIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gIWlucHV0LnZhbGlkaXR5LnZhbGlkO1xuICB9KVxufTtcblxuY29uc3QgdG9nZ2xlQnV0dG9uU3RhdGUgPSAoaW5wdXRMaXN0LCBidXR0b25FbCwgY29uZmlnKSA9PiB7XG4gIGlmIChoYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSkge1xuICAgIGRpc2FibGVCdXR0b24oYnV0dG9uRWwsIGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uRWwuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBidXR0b25FbC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgfVxufTtcblxuY29uc3QgZGlzYWJsZUJ1dHRvbiA9IChidXR0b25FbCwgY29uZmlnKSA9PiB7XG4gIGJ1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgYnV0dG9uRWwuY2xhc3NMaXN0LmFkZChjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRWYWxpZGF0aW9uID0gKGZvcm1FbCwgaW5wdXRMaXN0LCBjb25maWcpID0+IHtcbiAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgaGlkZUlucHV0RXJyb3IoZm9ybUVsLCBpbnB1dCwgY29uZmlnKVxuICB9KTtcbn07XG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKGZvcm1FbCwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oZm9ybUVsLnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmlucHV0U2VsZWN0b3IpKTtcbiAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGZvcm1FbC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBjb25maWcpO1xuXG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWwsIGlucHV0RWxlbWVudCwgY29uZmlnKTtcbiAgICAgIHRvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgY29uZmlnKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlVmFsaWRhdGlvbiA9IChjb25maWcpID0+IHtcbiAgY29uc3QgZm9ybUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNvbmZpZy5mb3JtU2VsZWN0b3IpO1xuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWwpID0+IHtcbiAgICBzZXRFdmVudExpc3RlbmVycyhmb3JtRWwsIGNvbmZpZyk7XG4gIH0pO1xufTtcblxuZW5hYmxlVmFsaWRhdGlvbihzZXR0aW5ncyk7IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCB7IGVuYWJsZVZhbGlkYXRpb24sIHNldHRpbmdzLCByZXNldFZhbGlkYXRpb24gfSBmcm9tIFwiLi4vc2NyaXB0cy92YWxpZGF0aW9uLmpzXCI7XG5cbmltcG9ydCBsb2dvU3JjIGZyb20gXCIuLi9pbWFnZXMvbG9nby5zdmdcIjtcbmltcG9ydCBlZGl0UHJvZmlsZVNyYyBmcm9tIFwiLi4vaW1hZ2VzL3BlbmNpbC5zdmdcIjtcbmltcG9ydCBhdmF0YXJTcmMgZnJvbSBcIi4uL2ltYWdlcy9hdmF0YXIuanBnXCI7XG5pbXBvcnQgYWRkUHJvZmlsZVNyYyBmcm9tIFwiLi4vaW1hZ2VzL3BsdXMuc3ZnXCI7XG5pbXBvcnQgY2xvc2VNb2RhbFNyYyBmcm9tIFwiLi4vaW1hZ2VzL3gtbG9nby5zdmdcIjtcbmltcG9ydCBjbG9zZUFkZE1vZGFsU3JjIGZyb20gXCIuLi9pbWFnZXMveC1sb2dvLnN2Z1wiO1xuaW1wb3J0IGNsb3NlUHJldmlld01vZGFsU3JjIGZyb20gXCIuLi9pbWFnZXMveC1sb2dvLnN2Z1wiO1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgYmFzZVVybDogXCJodHRwczovL2Fyb3VuZC1hcGkuZW4udHJpcGxldGVuLXNlcnZpY2VzLmNvbS92MVwiLFxuICBoZWFkZXJzOiB7XG4gICAgYXV0aG9yaXphdGlvbjogXCJjMTNiMTg1Yy04ZmJjLTQwYWQtYmI2Yi05ZTgzMDBlYjgzNTVcIixcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICB9XG59KTtcblxuYXBpLmdldEluaXRpYWxDYXJkcygpXG4gIC50aGVuKChjYXJkcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcbiAgfSlcblxuY29uc3QgbG9nb0ltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZXMtbG9nb1wiKTtcbmxvZ29JbWFnZS5zcmMgPSBsb2dvU3JjO1xuXG5jb25zdCBwZW5jaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGUtZWRpdC1wZW5jaWxcIik7XG5wZW5jaWwuc3JjID0gZWRpdFByb2ZpbGVTcmM7XG5cbmNvbnN0IGF2YXRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZS1hdmF0YXJcIik7XG5hdmF0YXIuc3JjID0gYXZhdGFyU3JjO1xuXG5jb25zdCBhZGRQcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvZmlsZVwiKTtcbmFkZFByb2ZpbGUuc3JjID0gYWRkUHJvZmlsZVNyYztcblxuY29uc3QgY2xvc2VNb2RhbEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1tb2RhbFwiKTtcbmNsb3NlTW9kYWxJbWFnZS5zcmMgPSBjbG9zZU1vZGFsU3JjO1xuXG5jb25zdCBjbG9zZUFkZE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1hZGQtbW9kYWwtbG9nb1wiKTtcbmNsb3NlQWRkTW9kYWwuc3JjID0gY2xvc2VBZGRNb2RhbFNyYztcblxuY29uc3QgY2xvc2VQcmV2aWV3TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpZXctY2xvc2UtbW9kYWwtbG9nb1wiKTtcbmNsb3NlUHJldmlld01vZGFsLnNyYyA9IGNsb3NlUHJldmlld01vZGFsU3JjO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlZhbCBUaG9yZW5zXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzEtcGhvdG8tYnktbW9yaXR6LWZlbGRtYW5uLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSZXN0YXVyYW50IHRlcnJhY2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMi1waG90by1ieS1jZWlsaW5lLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBbiBvdXRkb29yIGNhZmVcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMy1waG90by1ieS10dWJhbnVyLWRvZ2FuLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBIHZlcnkgbG9uZyBicmlkZ2UsIG92ZXIgdGhlIGZvcmVzdCBhbmQgdGhyb3VnaCB0aGUgdHJlZXNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNC1waG90by1ieS1tYXVyaWNlLWxhc2NoZXQtZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlR1bm5lbCB3aXRoIG1vcm5pbmcgbGlnaHRcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNS1waG90by1ieS12YW4tYW5oLW5ndXllbi1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTW91bnRhaW4gaG91c2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvNi1waG90by1ieS1tb3JpdHotZmVsZG1hbm4tZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG5dO1xuLy8gUHJvZmlsZSBlbGVtZW50c1xuY29uc3QgcHJvZmlsZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnRuXCIpO1xuY29uc3QgY2FyZE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnRuXCIpO1xuY29uc3QgcHJvZmlsZU5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCJcbik7XG5cbi8vIEZvcm0gZWxlbWVudHNcbmNvbnN0IGVkaXRQcm9maWxlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtcHJvZmlsZS1tb2RhbFwiKTtcbmNvbnN0IGVkaXRGb3JtRWxlbWVudCA9IGVkaXRQcm9maWxlTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcbmNvbnN0IGVkaXRQcm9maWxlQ2xvc2VCdXR0b24gPSBlZGl0UHJvZmlsZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLm1vZGFsX19jbG9zZS1idXR0b25cIlxuKTtcbmNvbnN0IGVkaXRNb2RhbE5hbWVJbnB1dCA9IGVkaXRQcm9maWxlTW9kYWwucXVlcnlTZWxlY3RvcihcbiAgXCIjcHJvZmlsZS1uYW1lLWlucHV0XCJcbik7XG5jb25zdCBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0ID0gZWRpdFByb2ZpbGVNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIiNwcm9maWxlLWRlc2NyaXB0aW9uLWlucHV0XCJcbik7XG5cblxuLy8gU2VsZWN0IHRoZSBtb2RhbFxuY29uc3QgcHJldmlld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2aWV3LW1vZGFsXCIpO1xuY29uc3QgcHJldmlld01vZGFsSW1hZ2VFbCA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbWFnZVwiKTtcbmNvbnN0IHByZXZpZXdNb2RhbENhcHRpb25FbCA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXB0aW9uXCIpO1xuY29uc3QgcHJldmlld01vZGFsQ2xvc2VCdXR0b24gPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcihcbiAgXCIubW9kYWxfX2Nsb3NlLWJ1dHRvbl90eXBlX3ByZXZpZXdcIlxuKTtcblxuY29uc3QgYWRkQ2FyZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1tb2RhbFwiKTtcbmNvbnN0IGNhcmRTdWJtaXRCdXR0b24gPSBhZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fc3VibWl0LWJ1dHRvblwiKTtcbmNvbnN0IGFkZENhcmRFbGVtZW50ID0gYWRkQ2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XG5jb25zdCBhZGRDYXJkTW9kYWxDbG9zZUJ1dHRvbiA9IGFkZENhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIi5tb2RhbF9fY2xvc2UtYnV0dG9uXCJcbik7XG5jb25zdCBjYXJkTmFtZUlucHV0ID0gYWRkQ2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbmFtZS1pbnB1dFwiKTtcbmNvbnN0IGNhcmRMaW5rSW5wdXQgPSBhZGRDYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1saW5rLWlucHV0XCIpO1xuXG5jb25zdCBjYXJkVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcmQtdGVtcGxhdGVcIik7XG5jb25zdCBjYXJkc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0XCIpO1xuXG4vLyBmdW5jdGlvbiB0byBoYW5kbGUgY2xvc2luZyB0aGUgbW9kYWwgd2l0aCBlc2NhcGUga2V5XG5mdW5jdGlvbiBoYW5kbGVFc2NhcGVLZXkoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIGNvbnN0IG9wZW5lZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9vcGVuZWRcIik7XG4gICAgaWYgKG9wZW5lZE1vZGFsKSB7XG4gICAgICBjbG9zZU1vZGFsKG9wZW5lZE1vZGFsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsaGFuZGxlRXNjYXBlS2V5KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfb3BlbmVkXCIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGhhbmRsZUVzY2FwZUtleSk7XG59XG5cblxuLy9hZGQgbGlzdGVuZXJzIGZvciBjbG9zaW5nIHRoZSBtb2RhbCBvbiBvdmVybGF5IGNsaWNrXG5mdW5jdGlvbiBhZGRPdmVybGF5Q2xpY2tMaXN0ZW5lcihtb2RhbCkge1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgIGNsb3NlTW9kYWwobW9kYWwpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIHNlbGVjdCBhbGwgbW9kYWxzXG5jb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpO1xuXG4vLyBhZGQgbGlzdGVuZXIgdG8gZWFjaCBtb2RhbFxubW9kYWxzLmZvckVhY2goKG1vZGFsKSA9PiB7XG4gIGFkZE92ZXJsYXlDbGlja0xpc3RlbmVyKG1vZGFsKTtcbn0pXG5cblxuZnVuY3Rpb24gaGFuZGxlRWRpdEZvcm1TdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9maWxlTmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlZGl0TW9kYWxOYW1lSW5wdXQudmFsdWU7XG4gIHByb2ZpbGVEZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICBjbG9zZU1vZGFsKGVkaXRQcm9maWxlTW9kYWwpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBZGRDYXJkU3VibWl0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7IG5hbWU6IGNhcmROYW1lSW5wdXQudmFsdWUsIGxpbms6IGNhcmRMaW5rSW5wdXQudmFsdWUgfTtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChpbnB1dFZhbHVlcyk7XG4gIGNhcmRzTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbiAgZXZ0LnRhcmdldC5yZXNldCgpO1xuXG4gIGRpc2FibGVCdXR0b24oY2FyZFN1Ym1pdEJ1dHRvbiwgc2V0dGluZ3MpO1xuICBjbG9zZU1vZGFsKGFkZENhcmRNb2RhbCk7XG59XG5cbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkVGVtcGxhdGUuY29udGVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gIGNvbnN0IGNhcmROYW1lRWwgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xuICBjb25zdCBjYXJkSW1hZ2VFbCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gIGNvbnN0IGNhcmRMaWtlQnV0dG9uID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKTtcblxuICBjYXJkTmFtZUVsLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xuICBjYXJkSW1hZ2VFbC5zcmMgPSBkYXRhLmxpbms7XG4gIGNhcmRJbWFnZUVsLmFsdCA9IGRhdGEubmFtZTtcblxuICBjYXJkTGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNhcmRMaWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkX19saWtlLWJ1dHRvbl9saWtlZFwiKTtcbiAgfSk7XG5cbiAgY2FyZERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcblxuICBjYXJkSW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChwcmV2aWV3TW9kYWwpO1xuICAgIHByZXZpZXdNb2RhbEltYWdlRWwuc3JjID0gZGF0YS5saW5rO1xuICAgIHByZXZpZXdNb2RhbEltYWdlRWwuYWx0ID0gZGF0YS5uYW1lO1xuICAgIHByZXZpZXdNb2RhbENhcHRpb25FbC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xufVxuXG5wcm9maWxlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBlZGl0TW9kYWxOYW1lSW5wdXQudmFsdWUgPSBwcm9maWxlTmFtZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBwcm9maWxlRGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50O1xuICByZXNldFZhbGlkYXRpb24oZWRpdFByb2ZpbGVNb2RhbCxBcnJheS5mcm9tKGVkaXRQcm9maWxlTW9kYWwucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5pbnB1dFNlbGVjdG9yKSksIHNldHRpbmdzKTtcbiAgb3Blbk1vZGFsKGVkaXRQcm9maWxlTW9kYWwpO1xufSk7XG5cbnByZXZpZXdNb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsb3NlTW9kYWwocHJldmlld01vZGFsKTtcbn0pO1xuXG5lZGl0UHJvZmlsZUNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsb3NlTW9kYWwoZWRpdFByb2ZpbGVNb2RhbCk7XG59KTtcblxuY2FyZE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG9wZW5Nb2RhbChhZGRDYXJkTW9kYWwpO1xufSk7XG5cbmFkZENhcmRNb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsb3NlTW9kYWwoYWRkQ2FyZE1vZGFsKTtcbn0pO1xuXG5lZGl0Rm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVFZGl0Rm9ybVN1Ym1pdCk7XG5hZGRDYXJkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUFkZENhcmRTdWJtaXQpO1xuXG5pbml0aWFsQ2FyZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGdldENhcmRFbGVtZW50KGl0ZW0pO1xuICBjYXJkc0xpc3QucHJlcGVuZChjYXJkRWxlbWVudCk7XG59KTtcblxuZW5hYmxlVmFsaWRhdGlvbihzZXR0aW5ncyk7XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsInNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJoaWRlSW5wdXRFcnJvciIsImZvcm1FbCIsImlucHV0RWwiLCJjb25maWciLCJlcnJvck1zZ0VsIiwicXVlcnlTZWxlY3RvciIsImlkIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsImlucHV0TGlzdCIsImJ1dHRvbkVsIiwic29tZSIsImlucHV0IiwidmFsaWRpdHkiLCJ2YWxpZCIsImhhc0ludmFsaWRJbnB1dCIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlZCIsImFkZCIsImVuYWJsZVZhbGlkYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJBcnJheSIsImZyb20iLCJidXR0b25FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoZWNrSW5wdXRWYWxpZGl0eSIsInNob3dJbnB1dEVycm9yIiwiZXJyb3JNc2ciLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIkFwaSIsImJhc2VVcmwiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsImdldEluaXRpYWxDYXJkcyIsInRoZW4iLCJjYXJkcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRFbGVtZW50QnlJZCIsInNyYyIsImxvZ29TcmMiLCJlZGl0UHJvZmlsZVNyYyIsImF2YXRhclNyYyIsImFkZFByb2ZpbGVTcmMiLCJjbG9zZU1vZGFsU3JjIiwiY2xvc2VBZGRNb2RhbFNyYyIsImNsb3NlUHJldmlld01vZGFsU3JjIiwicHJvZmlsZUVkaXRCdXR0b24iLCJjYXJkTW9kYWxCdXR0b24iLCJwcm9maWxlTmFtZUVsZW1lbnQiLCJwcm9maWxlRGVzY3JpcHRpb25FbGVtZW50IiwiZWRpdFByb2ZpbGVNb2RhbCIsImVkaXRGb3JtRWxlbWVudCIsImVkaXRQcm9maWxlQ2xvc2VCdXR0b24iLCJlZGl0TW9kYWxOYW1lSW5wdXQiLCJlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0IiwicHJldmlld01vZGFsIiwicHJldmlld01vZGFsSW1hZ2VFbCIsInByZXZpZXdNb2RhbENhcHRpb25FbCIsInByZXZpZXdNb2RhbENsb3NlQnV0dG9uIiwiYWRkQ2FyZE1vZGFsIiwiY2FyZFN1Ym1pdEJ1dHRvbiIsImFkZENhcmRFbGVtZW50IiwiYWRkQ2FyZE1vZGFsQ2xvc2VCdXR0b24iLCJjYXJkTmFtZUlucHV0IiwiY2FyZExpbmtJbnB1dCIsImNhcmRUZW1wbGF0ZSIsImNhcmRzTGlzdCIsImhhbmRsZUVzY2FwZUtleSIsImV2ZW50Iiwia2V5Iiwib3BlbmVkTW9kYWwiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwibW9kYWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0Q2FyZEVsZW1lbnQiLCJkYXRhIiwiY2FyZEVsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiY2FyZE5hbWVFbCIsImNhcmRJbWFnZUVsIiwiY2FyZExpa2VCdXR0b24iLCJjYXJkRGVsZXRlQnV0dG9uIiwibmFtZSIsImxpbmsiLCJhbHQiLCJ0b2dnbGUiLCJ0YXJnZXQiLCJhZGRPdmVybGF5Q2xpY2tMaXN0ZW5lciIsInJlc2V0VmFsaWRhdGlvbiIsInZhbHVlIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJwcmVwZW5kIiwicmVzZXQiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==