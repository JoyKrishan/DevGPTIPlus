    # after_commit :generate_variations, on: [:create, :update]
    # def generate_variations
    #     if main_image.attached?
    #       image = MiniMagick::Image.new(main_image)
    #       image.resize "300x300>"
    #       image.format "webp"
    #       image.write main_image.variant(resize: "300x300>").path
    #     end
    # end