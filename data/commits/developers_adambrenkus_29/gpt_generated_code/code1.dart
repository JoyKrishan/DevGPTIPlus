class ExchangeRate {
  final String code;
  final String description;
  final List<double> rates;

  ExchangeRate({
    required this.code,
    required this.description,
    required this.rates,
  });

  factory ExchangeRate.fromJson(Map<String, dynamic> json) {
    return ExchangeRate(
      code: json['code'],
      description: json['description'],
      rates: List<double>.from(json['rates'] ?? []),
    );
  }
}