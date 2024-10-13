class User < ApplicationRecord
  has_one_attached :photo

  after_commit :generate_variations, on: [:create, :update]

  private

  def generate_variations
    # Procesa y guarda la imagen en formato WebP
    photo.variant(resize: "100x100", format: :webp).processed
    photo.variant(resize: "300x300", format: :webp).processed
    # Añade más variantes según sea necesario
  end
end