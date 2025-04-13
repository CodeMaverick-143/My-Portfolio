import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function OpenSource() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Open Source & Hackathons</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Open Source Contributions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-card border border-border rounded-md p-2">
                  <svg width="48" height="48" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M499.9 0C223.9 0 0 223.9 0 500C0 721.8 143.2 910.6 342.1 976.9C367.1 981.7 376.3 966.7 376.3 953.9C376.3 942.4 375.7 901.6 375.7 859.7C236.3 889.5 207.1 799.8 207.1 799.8C184.3 741.8 151.5 726.8 151.5 726.8C106 696 154.8 696 154.8 696C205.3 699.5 231.9 748.2 231.9 748.2C276.7 824.4 349.1 801.6 377.7 788.8C382.5 756.6 395.9 734.4 410.3 721.8C298.9 709.3 181.9 666.2 181.9 474.1C181.9 419.3 201.5 374.5 233.1 340.5C227.7 328 210.5 276.7 238.1 207.7C238.1 207.7 280.3 194.3 375.7 259C415.3 247.9 458.4 242.5 500.9 242.1C543.4 242.1 586.5 247.9 626.1 259C721.5 194.3 763.7 207.7 763.7 207.7C791.3 276.7 774.1 328 768.7 340.5C800.3 374.5 819.9 419.3 819.9 474.1C819.9 666.2 702.9 708.7 591.5 721.2C609.7 736.8 625.5 767.2 625.5 814.3C625.5 880.5 624.9 938.4 624.9 953.9C624.9 966.7 634.1 981.7 659.1 976.9C858 910.6 1001.2 721.8 1001.2 500C1000 223.9 776.1 0 499.9 0Z"
                      fill="#100E0F"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Hacktoberfest 2024</h3>
                  <p className="text-sm text-muted-foreground">
                    Successfully completed 1 pull requests to open source projects
                  </p>
                  <div className="flex mt-2">
                    <Badge variant="secondary" className="mr-2">
                      1 PRs
                    </Badge>
                    <Badge variant="outline">October 2024</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-card border border-border rounded-md p-2">
                  <svg width="48" height="48" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M500 0C223.9 0 0 223.9 0 500C0 776.1 223.9 1000 500 1000C776.1 1000 1000 776.1 1000 500C1000 223.9 776.1 0 500 0ZM203.7 796.3C203.7 796.3 203.7 796.3 203.7 796.3L203.7 796.3ZM500 937.5C284.1 937.5 109.4 762.8 109.4 546.9C109.4 331 284.1 156.3 500 156.3C715.9 156.3 890.6 331 890.6 546.9C890.6 762.8 715.9 937.5 500 937.5Z"
                      fill="#FF9900"
                    />
                    <path
                      d="M500 156.3C284.1 156.3 109.4 331 109.4 546.9C109.4 762.8 284.1 937.5 500 937.5C715.9 937.5 890.6 762.8 890.6 546.9C890.6 331 715.9 156.3 500 156.3ZM500 843.8C336.5 843.8 203.1 710.4 203.1 546.9C203.1 383.4 336.5 250 500 250C663.5 250 796.9 383.4 796.9 546.9C796.9 710.4 663.5 843.8 500 843.8Z"
                      fill="#FF9900"
                    />
                    <path
                      d="M500 250C336.5 250 203.1 383.4 203.1 546.9C203.1 710.4 336.5 843.8 500 843.8C663.5 843.8 796.9 710.4 796.9 546.9C796.9 383.4 663.5 250 500 250ZM500 750C388.1 750 296.9 658.8 296.9 546.9C296.9 435 388.1 343.8 500 343.8C611.9 343.8 703.1 435 703.1 546.9C703.1 658.8 611.9 750 500 750Z"
                      fill="#FF9900"
                    />
                    <path
                      d="M500 343.8C388.1 343.8 296.9 435 296.9 546.9C296.9 658.8 388.1 750 500 750C611.9 750 703.1 658.8 703.1 546.9C703.1 435 611.9 343.8 500 343.8ZM500 656.3C439.7 656.3 390.6 607.2 390.6 546.9C390.6 486.6 439.7 437.5 500 437.5C560.3 437.5 609.4 486.6 609.4 546.9C609.4 607.2 560.3 656.3 500 656.3Z"
                      fill="#FF9900"
                    />
                    <path
                      d="M500 437.5C439.7 437.5 390.6 486.6 390.6 546.9C390.6 607.2 439.7 656.3 500 656.3C560.3 656.3 609.4 607.2 609.4 546.9C609.4 486.6 560.3 437.5 500 437.5ZM500 562.5C491.3 562.5 484.4 555.6 484.4 546.9C484.4 538.2 491.3 531.3 500 531.3C508.7 531.3 515.6 538.2 515.6 546.9C515.6 555.6 508.7 562.5 500 562.5Z"
                      fill="#FF9900"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Google Summer of Code</h3>
                  <p className="text-sm text-muted-foreground">Explored GSoC opportunities and submitted proposals</p>
                  <div className="flex mt-2">
                    <Badge variant="secondary" className="mr-2">
                      Applicant
                    </Badge>
                    <Badge variant="outline">March 2025</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hackathons & Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-card border border-border rounded-md p-2">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4285F4" />
                    <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" fill="#0F9D58" />
                    <path d="M2 7V17L12 12L2 7Z" fill="#EA4335" />
                    <path d="M22 7V17L12 12L22 7Z" fill="#FBBC04" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">DevFest 2024</h3>
                  <p className="text-sm text-muted-foreground">Participated in Google Developer Group's annual event</p>
                  <div className="flex mt-2">
                    <Badge variant="secondary" className="mr-2">
                      Participant
                    </Badge>
                    <Badge variant="outline">November 2024</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-card border border-border rounded-md p-2">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM9 17H6C5.45 17 5 16.55 5 16V13C5 12.45 5.45 12 6 12H9C9.55 12 10 12.45 10 13V16C10 16.55 9.55 17 9 17ZM9 10H6C5.45 10 5 9.55 5 9V6C5 5.45 5.45 5 6 5H9C9.55 5 10 5.45 10 6V9C10 9.55 9.55 10 9 10ZM18 17H15C14.45 17 14 16.55 14 16V13C14 12.45 14.45 12 15 12H18C18.55 12 19 12.45 19 13V16C19 16.55 18.55 17 18 17ZM18 10H15C14.45 10 14 9.55 14 9V6C14 5.45 14.45 5 15 5H18C18.55 5 19 5.45 19 6V9C19 9.55 18.55 10 18 10Z"
                      fill="#FF5722"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Scratchthon</h3>
                  <p className="text-sm text-muted-foreground">Won first place in the university hackathon</p>
                  <div className="flex mt-2">
                    <Badge variant="secondary" className="mr-2">
                      top 5
                    </Badge>
                    <Badge variant="outline">September 2024</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
