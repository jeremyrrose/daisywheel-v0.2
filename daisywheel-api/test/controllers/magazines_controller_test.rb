require 'test_helper'

class MagazinesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @magazine = magazines(:one)
  end

  test "should get index" do
    get magazines_url, as: :json
    assert_response :success
  end

  test "should create magazine" do
    assert_difference('Magazine.count') do
      post magazines_url, params: { magazine: { color_1: @magazine.color_1, color_2: @magazine.color_2, color_3: @magazine.color_3, color_4: @magazine.color_4, description: @magazine.description, font_1: @magazine.font_1, font_2: @magazine.font_2, header_image: @magazine.header_image, title: @magazine.title } }, as: :json
    end

    assert_response 201
  end

  test "should show magazine" do
    get magazine_url(@magazine), as: :json
    assert_response :success
  end

  test "should update magazine" do
    patch magazine_url(@magazine), params: { magazine: { color_1: @magazine.color_1, color_2: @magazine.color_2, color_3: @magazine.color_3, color_4: @magazine.color_4, description: @magazine.description, font_1: @magazine.font_1, font_2: @magazine.font_2, header_image: @magazine.header_image, title: @magazine.title } }, as: :json
    assert_response 200
  end

  test "should destroy magazine" do
    assert_difference('Magazine.count', -1) do
      delete magazine_url(@magazine), as: :json
    end

    assert_response 204
  end
end
