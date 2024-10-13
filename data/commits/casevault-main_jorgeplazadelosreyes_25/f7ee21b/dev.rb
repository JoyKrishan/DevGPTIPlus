    has_one_attached :main_image


    after_commit :generate_variations, on: [:create, :update]

    private

    def generate_variations
        main_image.variant(resize: "300x300", format: :webp).processed
    end