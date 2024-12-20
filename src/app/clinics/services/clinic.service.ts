import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Profile } from '../models/profile';
import { Media } from '../models/media';
import { Treatment } from '../models/treatment';
import { Doctor } from '../models/doctor';
import { Contact } from '../models/contact';
import { Hotel } from '../models/hotel';
import { CaseManager } from '../models/case-manager';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {

  removeDoctor(id: string) {
    console.log("remove")
  }
  getSpecialitites(): Observable<string[]> {
    return of(this.specialities).pipe(delay(100));
  }
  getLangs(): Observable<string[]> {
    return of(this.languages).pipe(delay(100));
  }

  clinics: string[] = [
    'City Health Clinic',
    'Sunrise Health Clinic',
    'Lakeside Family Clinic',
    'Mountain View Clinic',
  ];

  languages: string[] = ['English', 'Arabe', 'Frensh'];

  specialities: string[] = ['General Medicine', 'Pediatrics', 'Dermatology'];

  profile: Profile = {
    id:"fake",
    name: 'City Health Clinic',
    image:
      'https://marketplace.canva.com/EAEyadYkO0s/1/0/1600w/canva-health-care-logo-fSbVHMz-u48.jpg',
    address: '123 Main St',
    city: 'Anytown',
    openingYear: 2000,
    capacity: 100,
    priceWarrantyCertificate: 1000,
    phone: '123-456-7890',
    services: ['General Medicine', 'Pediatrics', 'Dermatology'],
  };

  contacts: Contact[] = [
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice.johnson@example.com"
    },
    {
      id: "2",
      name: "Bob Smith",
      email: "bob.smith@example.com"
    },
    {
      id: "3",
      name: "Charlie Brown",
      email: "charlie.brown@example.com"
    },
    {
      id: "4",
      name: "David Lee",
      email: "david.lee@example.com"
    },
    {
      id: "5",
      name: "Eva White",
      email: "eva.white@example.com"
    }
  ];

  doctors: Doctor[] = [
    {
      id: 'Dr. John Doe',
      name: 'Dr. John Doe',
      photo: 'https://example.com/photos/john_doe.jpg',
      cv: 'https://example.com/cvs/john_doe.pdf',
      specialities: ['Cardiology', 'Internal Medicine'],
      languages: ['English', 'Spanish'],
    },
    {
      id: 'Dr. Jane Smith',
      name: 'Dr. Jane Smith',
      photo: 'https://example.com/photos/jane_smith.jpg',
      cv: 'https://example.com/cvs/jane_smith.pdf',
      specialities: ['Pediatrics', 'Neonatology'],
      languages: ['English', 'French'],
    },
    {
      id: 'Dr. Emily Johnson',
      name: 'Dr. Emily Johnson',
      specialities: ['Dermatology'],
      languages: ['English'],
    },
    {
      id: 'Dr. Michael Brown',
      name: 'Dr. Michael Brown',
      photo: 'https://example.com/photos/michael_brown.jpg',
      specialities: ['Orthopedics', 'Sports Medicine'],
      languages: ['English', 'German'],
    },
  ];

  medias: Media[] = [
    {
      name: 'City Health Clinic',
      image:
        'https://marketplace.canva.com/EAEyadYkO0s/1/0/1600w/canva-health-care-logo-fSbVHMz-u48.jpg',
      language: ['All'],
    },
    {
      name: 'City Health Clinic',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f6/H%C3%B4ptal_am%C3%A9ricain_de_Neuilly_2011.jpg',
      language: ['English'],
    },
    {
      name: 'City Health Clinic',
      image:
        'https://media.gettyimages.com/id/1312706413/fr/photo/b%C3%A2timent-moderne-dh%C3%B4pital.jpg?s=612x612&w=gi&k=20&c=uDT_aoo1Tdi_HdKddXUaaB19YVDgwsjP4upK99Vj0gc=',
      language: ['English', 'Spanish'],
    },
  ];

  caseManagers: CaseManager[] = [
    {
      id: "1",
      name: "Emma Johnson",
      email: "emma.johnson@company.com",
      country: "United States"
    },
    {
      id: "2",
      name: "Liam Smith",
      email: "liam.smith@company.com",
      country: "Canada"
    },
    {
      id: "3",
      name: "Sophia Martinez",
      email: "sophia.martinez@company.com",
      country: "Mexico"
    },
    {
      id: "4",
      name: "James Wilson",
      email: "james.wilson@company.com",
      country: "United Kingdom"
    },
    {
      id: "5",
      name: "Olivia Brown",
      email: "olivia.brown@company.com",
      country: "Australia"
    },
    {
      id: "6",
      name: "Benjamin Lee",
      email: "benjamin.lee@company.com",
      country: "Singapore"
    },
    {
      id: "7",
      name: "Charlotte Taylor",
      email: "charlotte.taylor@company.com",
      country: "Germany"
    },
    {
      id: "8",
      name: "Lucas Garcia",
      email: "lucas.garcia@company.com",
      country: "Spain"
    }
  ];

  treatments: Treatment[] = [
    {
      name: 'General Medicine',
      capacity: 100,
    },
    {
      name: 'Pediatrics',
      capacity: 150,
    },
    {
      name: 'Dermatology',
      capacity: 200,
    },
  ];

  hotels: Hotel[] = [
    {
      id: "1",
      name: "Grand Palace Hotel",
      rating: 4.7,
      simpleRoom: 150,
      doubleRoom: 220,
      url: "https://grandpalacehotel.com",
      location: "Paris, France"
    },
    {
      id: "2",
      name: "Seaside Resort & Spa",
      rating: 4.5,
      simpleRoom: 180,
      doubleRoom: 250,
      url: "https://seasideresort.com",
      location: "Malibu, California, USA"
    },
    {
      id: "3",
      name: "Mountain View Lodge",
      rating: 4.3,
      simpleRoom: 120,
      doubleRoom: 200,
      url: "https://mountainviewlodge.com",
      location: "Aspen, Colorado, USA"
    },
    {
      id: "4",
      name: "Luxe Retreat Hotel",
      rating: 4.9,
      simpleRoom: 300,
      doubleRoom: 400,
      url: "https://luxeretreathotel.com",
      location: "Dubai, UAE"
    },
    {
      id: "5",
      name: "The Grand Marquis",
      rating: 4.2,
      simpleRoom: 110,
      doubleRoom: 190,
      url: "https://grandmarquishotel.com",
      location: "New York, USA"
    },
    {
      id: "6",
      name: "Sapphire Bay Resort",
      rating: 4.6,
      simpleRoom: 220,
      doubleRoom: 280,
      url: "https://sapphirebayresort.com",
      location: "Sydney, Australia"
    }
  ];


  constructor(private httpClientService: HttpclientService) { }
  baseUrl = environment.apiUrl;

  getClinics(): Observable<{ id: string; name: string }[]> {
    //20 is just a mock for now ! get the id of the person connected
    const url = `${this.baseUrl}/clinics/20`
    return this.httpClientService.get<{ id: string; name: string }[]>(url);
  }

  getTreatments(): Observable<Treatment[]> {
    return of(this.treatments).pipe(delay(100));
  }

  getProfile(id: string): Observable<Profile> {
    const url = `${this.baseUrl}/profilbyhopital/${id}`
    return this.httpClientService.get<Profile>(url);
    return of(this.profile).pipe(delay(100));
  }

  getDoctors(id: string): Observable<Doctor[]> {
    return of(this.doctors).pipe(delay(100));
  }

  getContracts(id: string): Observable<Contact[]> {
    return of(this.contacts).pipe(delay(100));
  }

  getCaseManager(id: string): Observable<CaseManager[]> {
    return of(this.caseManagers).pipe(delay(100));
  }


  getHotels(id: string): Observable<Hotel[]> {
    return of(this.hotels).pipe(delay(100));
  }

  updateProfile(profile: Profile): Observable<Profile> {
    this.profile = profile;
    return of(profile).pipe(delay(100));
  }

  addProcedure(procedure: Treatment): Observable<Treatment[]> {
    this.treatments.push(procedure);
    return this.getTreatments();
  }

  addDoctor(id: string, doctor: Doctor): Observable<Doctor[]> {
    this.doctors.push(doctor);
    return this.getDoctors('0');
  }

  addCaseManager(id: string, caseManger: CaseManager) {
    this.caseManagers.push(caseManger);
    return this.getCaseManager('0');
  }

  addContact(id: string, contact: Contact): Observable<Contact[]> {
    this.contacts.push(contact);
    return this.getContracts('0');
  }

  addHotel(id: string, hotel: Hotel) {
    this.hotels.push(hotel);
    return this.getHotels('0');
  }

  getMedias(id: string): Observable<Media[]> {
    return of(this.medias).pipe(delay(100));
  }
}
