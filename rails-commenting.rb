# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)creates a class called BlogPostsControllers, BlogPostsControllers is inheriting from pplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2)crates the instance veriable @posts. @post containts all of the instances in the BlogPost model
    @posts = BlogPost.all
  end

  # ---3) the method "show" finds a specific blog post instance of BlogPost (by ID) and stores it in the instance veriable @post
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) creates a new controller method that will allow new instances to be added to the BlogPost model
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) this creates an instance of BlogPost but only if the paramaters for the blog post are met otherwise a user is redirected back to what I'd assume is a "create a blog page" without their blog being posted
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) like number 3 this finds a specific blog post instance of BlogPost (by ID) and stores it in the instance veriable @post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) this is making an update (patch) to an instance of BlogPost at a spesficic instance (by ID), for an update to occur the update must satify strict paramters such as the post seen in number 5
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) if destroy (delete) dosen't work then the user will be redirected back to the blog post they were trying to delete/destroy
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) private means that everything below private is private/protected and can only be accessed by the class "blog_post_params"
  private
  def blog_post_params
    # ---10) this is setting the paramaters of the blog post (these paramaters are requeired for the update or create methods) the fact that its private protects is what make the previous param strong, the user is limited to posting or modifing only a blogs title and contect and cannot for example add a new column to the database
    params.require(:blog_post).permit(:title, :content)
  end
end
