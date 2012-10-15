CreativeCrowd::Application.routes.draw do
  get "static_pages/home"
  root to: 'static_pages#home'

  get "static_pages/mistery_box"
  match 'mistery_box', to: 'static_pages#mistery_box'

  get "static_pages/store"
  match 'store', to: 'static_pages#store'
end
