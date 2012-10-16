module ApplicationHelper
	# Returns the full title on a per-page basis.
  def full_title(page_title)
    base_title = "Creative CROWD"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

 def is_active(controller, action)  
   return "active" if params[:controller] == controller && params[:action] == action
 end

end
