@extends('admin.layout')
@section('title','Liste des sliders')

@section('main')


    <main class="col-sm-9 col-xs-12 content pt-3 pl-0" id="app">
        <h5 class="mb-0"><strong>Sliders</strong></h5>
        <span class="text-secondary">Sliders <i class="fa fa-angle-right"></i> Tous les sliders</span>
        <div class="row mt-3">
            <div class="col-sm-12">
                <!--Datatable-->
                <div class="mt-1 mb-3 p-3 button-container bg-white border shadow-sm">
                    <div class="row">
                        <div class="col-sm-6">
                            <h6 class="mb-2">Liste des sliders</h6>
                        </div>
                        <div class="col-sm-6">
                            <a class="btn btn-info text-white float-right my-3"
                               href="{{ route('page.item.add',['item'=>'slider']) }}">Nouveau</a>
                        </div>
                        <div class="col-8" id="alert-area" style="margin-right: auto;margin-left: auto;">
                            @if (\Session::has('success'))
                                <div class="alert alert-success alert-dissmissible">
                                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                    {!! \Session::get('success') !!}

                                </div>
                            @endif
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table id="example" class="table table-striped table-bordered text-center">
                            <thead>
                            <tr>
                                <th>Image</th>
                                <th>Label</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @if(count($sliders))
                                @foreach($sliders as $slider)
                                    <tr>
                                        <td class="align-middle">
                                            <img src="{{ getImage($slider->image) }}" width="50" height="50"
                                                 class=" rounded-circle" alt="Photo de profile">
                                        </td>
                                        <td class="align-middle">{{ $slider->name }}</td>
                                        <td class="align-middle">{{ $slider->details }}</td>
                                        <td class="align-middle"><span
                                                class="badge badge-{{ ($slider->featured==true) ? 'success':'secondary' }}">{{ ($slider->featured==true) ? 'Actif':'Passif' }}</span>
                                        </td>
                                        <td class="d-flex justify-content-center">
                                            <item-details-button item-type="slider"
                                                                 item-id="{{ $slider->id }}"></item-details-button>

                                            <div>
                                                <a href="{{ route('page.item.edit',['item'=>'slider','id'=>$slider->id]) }}"
                                                   class="action btn btn-success"
                                                   style="margin-left: 4px;color:#fff;"><i class="fa fa-pencil"></i></a>
                                            </div>
                                            <!--<button class="action btn btn-success"><i class="fa fa-pencil"></i></button>-->
                                            <delete-button item-type="slider"
                                                           item-id="{{ $slider->id }}"></delete-button>
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                            </tbody>
                        </table>
                        <div class="float-right">
                            {{$sliders->links()}}
                        </div>
                    </div>
                </div>
                <!--/Datatable-->

            </div>
        </div>

        @include('admin.includes.modals')

    </main>
@endsection
