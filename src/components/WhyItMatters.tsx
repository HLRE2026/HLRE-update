import { Users, BookOpen, Heart, Globe, ArrowRight } from 'lucide-react';

export default function WhyItMatters() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Mission & Impact
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why This Expedition Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond creating a documentary, this expedition will create lasting impact in communities, 
              schools, and recovery programs across Canada and beyond.
            </p>
          </div>

          {/* Impact Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Outreach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Speaking engagements and workshops in recovery centers, community halls, and support groups
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Educational Programs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                School presentations, curriculum development, and teacher resources about resilience
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Support Networks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building connections between stroke survivors and creating mentorship opportunities
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Distribution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Film festivals, streaming platforms, and international screening events
              </p>
            </div>
          </div>

          {/* Detailed Impact Breakdown */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Where Your Contribution Goes
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We're committed to complete transparency. 100% of donations directly fund the
                  expedition, film production, and community programming. If we raise more than
                  the cost of the documentary, every additional dollar fuels scholarships and
                  support resources for stroke survivors.
                </p>

                {/* Funding Allocation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">60%</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Documentary Production</h4>
                      <p className="text-gray-600 text-sm">Filming, editing, post-production, festival submissions and distribution.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">25%</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Community Impact Program</h4>
                      <p className="text-gray-600 text-sm">Workshops, school curriculum, and speaking tours that bring the film's lessons to life.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">15%</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Future Recovery Initiatives</h4>
                      <p className="text-gray-600 text-sm">Grants and equipment for stroke survivors, plus contingency for unexpected costs.</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm italic mb-8">
                  Any funds raised beyond the documentary's budget automatically increase the
                  Community Impact Program & Future Recovery Initiatives portions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">Projected Reach</h4>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Documentary Viewers</span>
                    <span className="font-bold text-gray-900">50,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Direct Community Engagement</span>
                    <span className="font-bold text-gray-900">2,500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Students Reached</span>
                    <span className="font-bold text-gray-900">10,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Support Group Presentations</span>
                    <span className="font-bold text-gray-900">100+</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total Lives Impacted</span>
                      <span className="font-bold text-blue-600 text-lg">75,000+</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group">
                    Join Our Mission
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                "Mark's story isn't just about recovery—it's about showing every person facing adversity 
                that transformation is possible. This expedition will create ripples of hope that reach 
                far beyond the mountains."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Dr. Sarah Mitchell</p>
                  <p className="text-gray-600">Rehabilitation Specialist, Alberta Health Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
